@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Adding all changes...
git add -A
echo.
echo Committing changes...
git commit -m "优化国家城市页面：按GDP排序、Apple风格UI、全局说明仅亚洲显示居中"
echo.
echo Pushing to remote...
git push
echo.
echo Done!
pause

