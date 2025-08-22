HEALTH CHECK-UP APP

A simple web application that helps users monitor their basic health indicators — temperature, diabetes readings, and anxiety levels — and provides personalized advice based on their condition.

FEATURES

Check if body temperature is above normal

Monitor diabetes levels

Assess anxiety levels

Receive advice tailored to your health indicators

PREREQUISITES

Node.js
 installed on your system

Basic knowledge of running commands in PowerShell or Command Prompt

SETUP & INSTALLATION

Clone the repository

git clone https://github.com/nansikom/sprint.git
cd sprint


Initialize Node project

npm init -y


Install dependencies

npm install
npm install express
npm install request
npm install cors

RUNNING THE APP

Start the Node servers

node node.js
node server.js


Open the app in your browser

The app will typically run at:

http://localhost:5000


Use the interface

Enter your health information (temperature, diabetes readings, anxiety status)

Receive guidance and advice based on your input

PROJECT STRUCTURE
sprint/
├── server.js       # Main server handling requests
├── node.js         # Secondary server logic
├── sprint.html     # Main front-end interface
├── recommendations.html # Health advice page
├── style.css       # Styling for sprint.html
├── style1.css      # Additional styling
├── style3.css      # Additional styling
└── anxiety.txt     # Data or content file for anxiety checks

NOTES

Ensure ports 5000 or 8000 are open and available for the servers.

Run servers in the order: node node.js first, then node server.js.

No database is required; all checks are done locally through input and logic files.

TECHNOLOGIES USED

Node.js

Express.js

CORS

Request

HTML, CSS

AUTHOR
