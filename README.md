## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Process to run](#process-to-run)
* [Setup mail service](#setup-mail-service)
* [How to change configuration of NODE application](#how-to-change-configuration-of-NODE-application)

## General info
This project is created for online Seat Booking System.This project is Build using Angular 8, NodeJS and MongoDB,
	
## Technologies
Project is created with:
* Angular 8
* Node JS
* MongoDB
* Express
	
## Setup
To run this project, install it locally using npm:

```
$ npm install           # install all node dependecies
$ cd ticket-booking     # go to ticket-booking(Angular UI folder)
$ npm install           # install all angular 8 dependencies
$ ng build --prod       # build angular app with prod environment
$ cd ..                 # go back to root project folder
$ nodemon server.js     # start node server
```
Navigate to `http://localhost:9090/`. The app will automatically reload if you change any of the source files.

## Setup mail service

* To use mail service please configure mail credentials . Please refer 'How to change configuration of application' section

## How to change configuration of NODE application
All the node configuration is stored in the file 'config.json'
To edit configuration
1. Run `cd configuration`
2. Open file config.json, now edit configuration
```{
    "node" :{
        "port": 9090 
    },
    "mongo" :{
        "url":"mongodb://localhost:27017/ticket_booking"
    },
    "email": {
        "auth": {
            "user": "youremail@gmail.com",
            "password": "yourpassword"
        },
        "details": {
            "from": "youremail@gmail.com",
            "subject": "Seat Confirmation",
            "text": "Hi, Your seat has been booked"
        }
    }
}```

* You can change the default node port.
* You can change mongourl to your desired mongo url.
* You can set email auth credentials.
* You can change default mail message.

## How to change configuration of Angular application
1. To change angular configuration for local --> edit environment.ts file (/ticket-booking/src/environments/environment.ts)
2. To change angular configuration for prod --> edit  environment.prod.ts file (/ticket-booking/src/environments/environment.prod.ts)

