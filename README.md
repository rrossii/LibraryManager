Prerequisites:
```angular2html
Java 17.0.11
Maven
MySQL Server 8.0.38

node 22.4.1
npm 10.8.1
nvm 0.39.0
```
Run on Linux (recommended!!!):
* Ensure you have sudo privileges to run commands
* Open terminal: ctrl + alt + t
* Run scripts from /LibraryManager/scripts:
    ```bash
    ./install-back.sh
    ```
    ```bash
  ./install-front.sh 
  ```
* Database configuration:
  ```
  sudo mysql -u root -p
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
  exit
  
  sudo mysql mysql_secure_installation
  password
  n n n n n y
  ```
  Done!

* Run script from /LibraryManager/scripts to create database:
  ```bash
  ./create-db.sh
  ```

* Run from /LibraryManager/LibraryManager (where pom.xml is located):
  ```
    mvn spring-boot:run 
  ```
* Run from LibraryManager/library-frontend:
  ```
  npm start
  ```

Please, if you have any problems about installation or app launch, ask me (annros2003@gmail.com)


If you are on Windows:
* Download and install JDK 17
  ```angular2html
  - Download .exe from https://www.oracle.com/java/technologies/downloads/#jdk17-windows
  - Follow the steps in Java installer
  - Set environment variable JAVA_HOME to your Java path. Example is C:\Program Files\Java\jdk-17
  - Add the variable JAVA_HOME + \bin to your Path system variables. Example is C:\Program Files\Java\jdk-17\bin
  ```
* Check if Java installed
  ```angular2html
  - Open cmd 
  - java --version
  ```
* Download and install MySQL Server 8.0.38
  ```angular2html
  - Download from https://dev.mysql.com/downloads/windows/installer/8.0.html
  - Follow the steps in MySQL Installer to install
  ```
* Run from /LibraryManager/LibraryManager (where pom.xml is located):
  ```
    mvn spring-boot:run 
  ```
* Run from LibraryManager/library-frontend:
  ```
  npm start
  ```
