# Project-1-Submission-Fantastic-Five-Group

CPSC-473-Project-1

Team members:

Neha Balki   balkineha_24@csu.fullerton.edu,                         
Keerthi SV   keerthisv@csu.fullerton.edu


Project Title: ConnectMe                                  
(Users can create their own "business card" or "landing" pages).

Installation and Configuration:

The website can be run on Windows/Mac/Linux.                      
Download all the files from https://github.com/BalkiNeha/Project-1-Submission-Fantastic-Five-Group

Use the following commands into command prompt or the console to run a Deployd application and open the dashboard (database interface):

$cd ConnectMe-backend
$dpd -d

Note: check the port on which dashboard opens. The port should be same in the following javascript files under script folder in ConnectMe. The default port is 2403.

connectmelink.js       var SERVER_URL = "http://localhost:2403/connectme";                       
login.js               var SERVER_URL = "http://localhost:2403/usersverification";         
signup.js              var SERVER_URL = "http://localhost:2403/usersverification";              
userpage.js            var SERVER_URL = "http://localhost:2403/connectme";                 

Open ConnectMe project in browser-sync using following command: 
$cd ConnectMe
$browser-sync start --server --files "stylesheets/*.css, *.html"

Please view screenshots for reference. 

Technology used:

Front-End: 
HTML5
Javascript
CSS3
Bootstrap 

Back-End:
Ajax
Deployd
MongoDB

Atom

Reference Link:                             
http://docs.deployd.com/docs/collections/reference/dpd-js.html                         
https://www.w3schools.com/css/
