Prerequisites:
```angular2html
Java 17.0.11
Maven
MySQL Server 8.0.38
```
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
* Run the app
```angular2html
mvn spring-boot:run
```