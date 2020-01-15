# 2dv513_finalProject

## Installation guide. 

### Download and preparation 
* Create a database named final_project. 
* Fork or clone this project.
* Locate to the folder config in the server folder (2dv513_finalProject/server/config) in a texteditor or IDE.
* In the config folder create a file named dbConnection.js
* Copy the content from dbConnection.js.template and insert it into dbConnection.js
* Replace all 'VALUE' with your database setting.
* Locate to the server folder in a terminal or IDE and run: npm install
* Locate to the client folder in a terminal or IDE and run: npm install


### Create and seed Tables
* Locate to the server folder in a terminal or IDE
* From the server folder run:  npm run createTables
* Stop script by press ctrl c
* From the server folder run: npm run seeder
* Stop script by press ctrl c

### Start up frontend and backend
* From the server folder run: npm run dev
* To stop servers press ctrl c.

The app should be automaticly opened on localhost:3000
