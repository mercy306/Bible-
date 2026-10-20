@echo off
rem Double-click this file to start the Bible reader and open it in your browser.
rem Keep this window open while you read. Close it to stop the server.

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies, please wait...
  call npm install --no-audit --no-fund
)

if not exist "data\kjv\meta.json" (
  echo Bible text not found. Downloading, please wait...
  call npm run fetch
)

if not exist "data\guide\meta.json" (
  echo Guide material not found. Downloading, please wait...
  call npm run fetch:guide
)

echo.
echo Starting the server on http://localhost:4001 ...
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul & start "" "http://localhost:4001""

node server\index.mjs

echo.
echo The server has stopped.
pause