@echo off
rem Banquier FR - starts a local server and opens the app in the browser
cd /d "%~dp0"
start "Banquier FR server" /min python -m http.server 8765 --bind 127.0.0.1
timeout /t 1 /nobreak >nul
start "" http://localhost:8765/
