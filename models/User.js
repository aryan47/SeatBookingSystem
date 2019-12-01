/*
 * Created on Sun Dec 01 2019
 * Created by : Ritesh Kant
 *
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    userTickets: [
        {
            movieId: String,
            time: String,
            adultCount: Number,
            childrenCount: Number
        }
    ]

});

module.exports = mongoose.model('user', UserSchema);