# OCRs the Old Testament commentary volumes into per-page text.
#
# The earlier run of these volumes produced Latin gibberish because Tesseract was
# left on its default English model. This script always selects the Amharic model
# explicitly and points TESSDATA_PREFIX at the folder that holds amh.traineddata.
#
#   powershell -ExecutionPolicy Bypass -File ocr-ot-amharic.ps1
#
# Pages that fail are listed at the end so nothing is silently dropped.

param(
  [string]$PdfDir = "$env:USERPROFILE\bible-ocr\ot",
  [string]$OutRoot = "$env:USERPROFILE\bible-ocr\ot\pages-text",
  [string]$TessData = "$env:USERPROFILE\bible-ocr\tessdata",
  [string[]]$Volumes = @('VOL01AOT_amharic', 'VOL01BOT_amharic', 'VOL10OT_amharic'),
  [int]$Dpi = 300,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
$env:TESSDATA_PREFIX = $TessData

function Find-Tool($name) {
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  foreach ($hint in @("$env:LOCALAPPDATA\Microsoft\WinGet\Packages", 'C:\Program Files', 'C:\Program Files (x86)')) {
    if (-not (Test-Path $hint)) { continue }
    $found = Get-ChildItem -Path $hint -Filter "$name.exe" -Recurse -ErrorAction SilentlyContinue |
      Select-Object -First 1
    if ($found) { return $found.FullName }
  }
  return $null
}

$pdftoppm = Find-Tool 'pdftoppm'
$tesseract = Find-Tool 'tesseract'

if (-not $pdftoppm) { Write-Host 'pdftoppm not found. Run: winget install oschwartz10612.Poppler' -ForegroundColor Red; exit 1 }
if (-not $tesseract) { Write-Host 'tesseract not found. Run: winget install UB-Mannheim.TesseractOCR' -ForegroundColor Red; exit 1 }
if (-not (Test-Path (Join-Path $TessData 'amh.traineddata'))) {
  Write-Host "amh.traineddata not found in $TessData" -ForegroundColor Red
  exit 1
}

$langs = & $tesseract --list-langs 2>&1
if ($langs -notcontains 'amh') { Write-Host 'Tesseract cannot see amh.traineddata' -ForegroundColor Red; exit 1 }

$failed = @()

foreach ($volume in $Volumes) {
  $pdf = Join-Path $PdfDir "$volume.pdf"
  if (-not (Test-Path $pdf)) { Write-Host "missing $pdf" -ForegroundColor Yellow; continue }

  $outDir = Join-Path $OutRoot $volume
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null

  $pages = [int]((& pdfinfo $pdf 2>$null | Select-String '^Pages:') -replace 'Pages:\s*', '')
  Write-Host "`n$volume - $pages pages" -ForegroundColor Cyan

  $scratch = Join-Path $env:TEMP "ocr-$volume"
  New-Item -ItemType Directory -Force -Path $scratch | Out-Null

  for ($page = 1; $page -le $pages; $page++) {
    $target = Join-Path $outDir ('{0:d4}.txt' -f $page)
    if (-not $Force -and (Test-Path $target)) { continue }

    $stem = Join-Path $scratch 'page'
    Get-ChildItem -Path $scratch -Filter 'page*.png' -ErrorAction SilentlyContinue | Remove-Item -Force

    # Some scans carry malformed XMP that makes Poppler grumble on stderr while
    # still rendering the page, so its warnings are ignored and the output file
    # is what decides success.
    $ErrorActionPreference = 'Continue'
    & $pdftoppm -f $page -l $page -r $Dpi -png $pdf $stem 2>$null
    $image = Get-ChildItem -Path $scratch -Filter 'page*.png' -ErrorAction SilentlyContinue |
      Select-Object -First 1
    if (-not $image) { $failed += "$volume p$page (no image)"; continue }

    # -l amh is the whole point of this script.
    & $tesseract $image.FullName ($target -replace '\.txt$', '') -l amh --psm 6 2>$null
    $ErrorActionPreference = 'Stop'
    if (-not (Test-Path $target)) { $failed += "$volume p$page (no text)" }

    if ($page % 25 -eq 0) {
      Write-Host ("  {0}/{1}" -f $page, $pages)
    }
  }

  Remove-Item -Path $scratch -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "`ndone. $((Get-ChildItem $OutRoot -Recurse -Filter *.txt | Measure-Object).Count) page files total." -ForegroundColor Green
if ($failed.Count) {
  Write-Host "$($failed.Count) pages need another look:" -ForegroundColor Yellow
  $failed | ForEach-Object { Write-Host "  $_" }
}
