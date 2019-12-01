# Seat Booking System

This project is created for online Seat Booking System
This project is Build using Angular 8, NodeJS and MongoDB,

## Process to run this project
1. Clone the project in the desired folder.
2. You maust have Angular CLI 8 installed in your system.
3. Run `npm install` to install node dependencies.
4. Run `cd ticket-booking`
5. Run `npm install` to install angular 8 dependencies.
6. Run `ng build --prod` to build angular project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
7. Run `cd ..` to go one step back.
8. Run `nodemon server.js` to run node server. Navigate to `http://localhost:9090/`. The app will automatically reload if you change any of the source files.
9. To use mail service please configure mail credentials in . Please refer 'How to change configuration of application' section

## How to change configuration of application
All the node configuration is stored in the file 'config.json'
To edit configuration
1. Run `cd configuration`
2. Open file config.json, now edit configuration
`{
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
}`

You can change the default node port.
You can change mongourl to your desired mongo url
You can set email auth credentials
You can change default mail message.

## Changing angular environment

To change base url, go to environment.ts / environment.prod.ts and chenge the baseUrl
