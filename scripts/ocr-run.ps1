# OCRs a page range of the scanned Amharic commentary, one page at a time.
# Resumable: each page's text is stored separately and finished pages are skipped.
#
#   powershell -ExecutionPolicy Bypass -File scripts/ocr-run.ps1 -From 1 -To 659
param(
  [int]$From = 1,
  [int]$To = 659,
  [int]$Dpi = 300
)

$ErrorActionPreference = 'Continue'

$base = 'C:\Users\bsd\bible-ocr'
$imgDir = Join-Path $base 'pages'
$txtDir = Join-Path $base 'pages-text'
$pdf = 'C:\Users\bsd\bible-ocr\source.pdf'
if (-not (Test-Path $pdf)) {
  Write-Host "Missing $pdf" -ForegroundColor Red
  Write-Host "Copy the Amharic PDF there first, e.g.:" -ForegroundColor Yellow
  Write-Host "  Copy-Item -LiteralPath `$env:USERPROFILE\Downloads\<file>.pdf C:\Users\bsd\bible-ocr\source.pdf" -ForegroundColor Yellow
  exit 1
}

$env:TESSDATA_PREFIX = Join-Path $base 'tessdata'
$tesseract = 'C:\Program Files\Tesseract-OCR\tesseract.exe'
$pdftoppm = 'C:\Users\bsd\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin\pdftoppm.exe'

New-Item -ItemType Directory -Force -Path $imgDir | Out-Null
New-Item -ItemType Directory -Force -Path $txtDir | Out-Null

# Clear any images left behind by an interrupted run.
Get-ChildItem $imgDir -Filter '*.png' -ErrorAction SilentlyContinue | Remove-Item -Force

$sw = [Diagnostics.Stopwatch]::StartNew()
$ok = 0
$empty = 0
$failed = 0
$skipped = 0

for ($n = $From; $n -le $To; $n++) {
  $out = Join-Path $txtDir ('{0:d4}' -f $n)
  if (Test-Path "$out.txt") {
    $skipped++
    continue
  }

  # Render exactly one page, then remove the image immediately after OCR.
  # Never pipe a native command through Out-Null: redirecting poppler/tesseract
  # output into a closed pipeline makes them abort before doing any work.
  & $pdftoppm -r $Dpi -gray -png -f $n -l $n $pdf (Join-Path $imgDir 'x')
  $img = Join-Path $imgDir ('x-{0:d3}.png' -f $n)
  if (-not (Test-Path $img)) {
    $img = Get-ChildItem $imgDir -Filter 'x-*.png' -ErrorAction SilentlyContinue |
      Select-Object -First 1 -ExpandProperty FullName
  }

  if (-not $img) {
    $failed++
    continue
  }

  & $tesseract $img $out -l amh --psm 3

  if (Test-Path "$out.txt") {
    $len = (Get-Item "$out.txt").Length
    if ($len -lt 40) { $empty++ } else { $ok++ }
  } else {
    Set-Content -LiteralPath "$out.txt" -Value '' -Encoding UTF8
    $failed++
  }

  Remove-Item $img -Force -ErrorAction SilentlyContinue

  if (($ok + $empty) % 25 -eq 0) {
    $mins = [math]::Round($sw.Elapsed.TotalMinutes, 1)
    $left = if ($mins -gt 0) { [math]::Round((($To - $n) / ($n - $From + 1)) * $mins) } else { '?' }
    Write-Host ("  page {0}/{1}   ok={2} thin={3} failed={4}   {5} min elapsed, ~{6} min left" -f `
      ($n - $From + 1), ($To - $From + 1), $ok, $empty, $failed, $mins, $left)
  }
}

$total = (Get-ChildItem $txtDir -Filter '*.txt' -ErrorAction SilentlyContinue).Count
Write-Host "`nBatch complete. ok=$ok thin=$empty failed=$failed skipped=$skipped"
Write-Host "Pages stored in total: $total"