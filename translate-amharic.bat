@echo off
rem Machine-translates the English guide material (Matthew Henry, Strong's)
rem into Amharic. This takes a while and needs an internet connection.
rem It is resumable: if you stop it, run it again and it carries on where it left off.
rem Close this window to stop.

cd /d "%~dp0"

if not exist "data\guide\strongs.json" (
  echo Fetching guide material first...
  call npm run fetch:guide
)

echo.
echo Translating into Amharic. This takes roughly 1-2 hours.
echo Keep this window open. Press Ctrl+C to stop and resume later.
echo.

call npm run translate:guide

echo.
echo Translation finished. Start the app with open-bible.bat
pause