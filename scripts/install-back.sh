sudo apt update
sudo dpkg --configure -a
sudo apt install openjdk-17-jdk-headless -y
sudo apt update
sudo apt-get install mysql-server -y
sudo systemctl start mysql.service
sudo apt install maven -y

