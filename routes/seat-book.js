/*
 * Created on Sat Nov 30 2019
 * Created by - Ritesh Kant
 *
 */

const express = require('express');
var Cinema = require('../models/Cinema');
var router = express.Router();

/** Get all the seats status */
router.get('/', (req, res) => {
    Cinema.find({}).then((data) => {
        res.send(data);
    }).catch(err => console.log(err));
});

/** Used to create seat information */
router.post('/', (req, res) => {
    Cinema.insertMany(req.body).then((data) => {
        res.json(data);
    }).catch(err => console.log(err));

});

/** Used to update seat information */
router.patch('/', (req, res) => {
    req.body.forEach((value) => {
        const id = value._id;
        const selected = value.isSelected;
        Cinema.findOneAndUpdate({ _id: id }, { $set: { isSelected: selected } }).then(() => {
            console.log('congrats saved');
        }).catch((err) => console.log(err));
    });
    res.send({ message: 'success' });

});

module.exports = router;