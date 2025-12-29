@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Adding all changes...
git add -A
echo.
echo Committing changes...
git commit -m "Country detail: remove view count suffix and optimize display"
echo.
echo Pushing to remote...
git push
echo.
echo Done!
pause

