/*
 * Created on Sun Dec 01 2019
 * Created by : Ritesh Kant
 *
 */
var mongoose = require('mongoose');

var CinemaSchema = new mongoose.Schema({
    seatNum: String,
    isSelected: Boolean,
});

module.exports = mongoose.model('cinema', CinemaSchema);