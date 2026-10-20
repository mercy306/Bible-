# OCRs a scanned Amharic commentary PDF into plain text.
#
# Requires Tesseract OCR (with the Amharic language) and Poppler:
#   winget install UB-Mannheim.TesseractOCR
#   winget install oschwartz10612.Poppler
# Then run:  powershell -ExecutionPolicy Bypass -File ocr-amharic.ps1
#
# Pages that fail are listed at the end so nothing is silently dropped.

param(
  [string]$Pdf = "$env:USERPROFILE\Downloads\የአድስ ኪዳን ማብራሪያ.pdf",
  [string]$OutDir = "$env:USERPROFILE\bible-ocr",
  [int]$Dpi = 300
)

$ErrorActionPreference = 'Stop'

function Find-Tool($name, $hint) {
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $found = Get-ChildItem -Path $hint -Filter "$name.exe" -Recurse -ErrorAction SilentlyContinue |
    Select-Object -First 1
  if ($found) { return $found.FullName }
  return $null
}

$pdftoppm = Find-Tool 'pdftoppm' 'C:\Program Files'
$tesseract = Find-Tool 'tesseract' 'C:\Program Files'

if (-not $pdftoppm) { Write-Host "pdftoppm not found. Run: winget install oschwartz10612.Poppler" -ForegroundColor Red; exit 1 }
if (-not $tesseract) { Write-Host "tesseract not found. Run: winget install UB-Mannheim.TesseractOCR" -ForegroundColor Red; exit 1 }

Write-Host "pdftoppm : $pdftoppm"
Write-Host "tesseract: $tesseract"

# Confirm the Amharic language pack is present before spending hours.
$langs = & $tesseract --list-langs 2>&1 | Out-String
if ($langs -notmatch '(?m)^\s*amh\s*$') {
  Write-Host "Amharic language data (amh) is missing from Tesseract." -ForegroundColor Red
  Write-Host "Download amh.traineddata from:" -ForegroundColor Yellow
  Write-Host "  https://github.com/tesseract-ocr/tessdata_best/raw/main/amh.traineddata" -ForegroundColor Yellow
  Write-Host "then copy it into the tessdata folder next to tesseract.exe." -ForegroundColor Yellow
  exit 1
}
Write-Host "Amharic (amh) language pack: present" -ForegroundColor Green

if (-not (Test-Path -LiteralPath $Pdf)) {
  Write-Host "PDF not found: $Pdf" -ForegroundColor Red
  exit 1
}

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$imgDir = Join-Path $OutDir 'pages'
if (Test-Path $imgDir) { Remove-Item $imgDir -Recurse -Force }
New-Item -ItemType Directory -Force -Path $imgDir | Out-Null

$pdfSize = [math]::Round((Get-Item -LiteralPath $Pdf).Length / 1MB, 1)
Write-Host "`nRasterising at $Dpi dpi ($pdfSize MB). This takes a few minutes..." -ForegroundColor Cyan

& $pdftoppm -r $Dpi -gray -png $Pdf (Join-Path $imgDir 'p') 2>&1 | Out-Null

$pages = Get-ChildItem $imgDir -Filter '*.png' | Sort-Object Name
if ($pages.Count -eq 0) { Write-Host "No pages produced." -ForegroundColor Red; exit 1 }
Write-Host "Rendered $($pages.Count) pages.`n" -ForegroundColor Green

$outFile = Join-Path $OutDir 'commentary-amharic.txt'
if (Test-Path $outFile) { Remove-Item $outFile -Force }
$failed = New-Object System.Collections.Generic.List[string]
$sw = [Diagnostics.Stopwatch]::StartNew()

for ($i = 0; $i -lt $pages.Count; $i++) {
  $page = $pages[$i]
  $pageOut = Join-Path $imgDir ("txt-{0:d4}" -f ($i + 1))
  & $tesseract $page.FullName $pageOut -l amh --psm 3 2>&1 | Out-Null
  $txt = "$pageOut.txt"
  if (Test-Path $txt) {
    Add-Content -LiteralPath $outFile -Value (Get-Content -LiteralPath $txt -Raw -Encoding UTF8) -Encoding UTF8
    Add-Content -LiteralPath $outFile -Value "`n`n=== page $($i + 1) ===`n" -Encoding UTF8
  } else {
    $failed.Add($page.Name)
  }

  if (($i + 1) % 25 -eq 0 -or $i -eq $pages.Count - 1) {
    $elapsed = [math]::Round($sw.Elapsed.TotalMinutes, 1)
    $rate = if ($sw.Elapsed.TotalSeconds -gt 0) { [math]::Round(($i + 1) / $sw.Elapsed.TotalSeconds * 60) } else { 0 }
    $left = if ($rate -gt 0) { [math]::Round(($pages.Count - $i - 1) / $rate, 1) } else { '?' }
    Write-Host ("  {0}/{1} pages   {2} min elapsed   ~{3} min left" -f ($i + 1), $pages.Count, $elapsed, $left)
  }
}

$chars = (Get-Content -LiteralPath $outFile -Raw -Encoding UTF8).Length
Write-Host "`nDone in $([math]::Round($sw.Elapsed.TotalMinutes, 1)) minutes." -ForegroundColor Green
Write-Host "Text file: $outFile ($([math]::Round($chars / 1024)) KB)"
if ($failed.Count -gt 0) {
  Write-Host "Pages that produced no text: $($failed.Count)" -ForegroundColor Yellow
  Write-Host "  $($failed -join ', ')" -ForegroundColor Yellow
}
Write-Host "`nKeep $OutDir until the import is finished." -ForegroundColor Cyan