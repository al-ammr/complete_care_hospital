@echo off
cd /d "C:\Users\Crypto_Bash\Documents\Paid_Projects\Complete_Care_Hospital_Website"
set LOG=C:\Users\CRYPTO~1\AppData\Local\Temp\opencode\next-dev.log
set ERG=%LOG%.err
call npm.cmd run dev > "%LOG%" 2> "%ERG%"
