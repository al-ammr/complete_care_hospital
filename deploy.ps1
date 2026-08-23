cd C:\Users\Crypto_Bash\Documents\Paid_Projects\Complete_Care_Hospital_Website
git config --global core.autocrlf false
git init
git remote remove origin
git remote add origin https://github.com/al-ammr/complete_care_hospital.git
git branch -M main
git add .
git commit -m "Initial commit with full implementation and updated README"
git push -u origin main
