@echo off
chcp 65001 >nul
echo.
echo =============================================
echo    启动货代知识库本地服务器
echo =============================================
echo.
cd /d "%~dp0"
node server.js
pause

