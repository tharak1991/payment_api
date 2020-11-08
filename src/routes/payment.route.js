const express = require('express');
const routes = express.Router();
const payment_controller = require('../controllers/payment.controller');
const redis_subscriber = require('./../redis/subscriber');
const {
    EventEmitter
} = require('events');




routes.get("/:id", async (req, res, next) => {
    try {

        const id = req.params.id;
        await payment_controller.getById(id);
        
        console.log('user info processed');
        res.status(200).json({
            status: true
        });

        // const user_info_event = new EventEmitter() ;
        // let user = {};

        // user_info_event.on('user', (user) => {
        //     console.log('inside promise', user);
        //     user_info_event.on('user', (user) => {

        //         res.status(200).json({
        //             status: true,
        //             user: user

        //         });
        //     })
        // });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            status: false,
            error: e
        });
        next();
    }
});


routes.use('*', (req, res) => {
    res.status(400).json({
        error: true,
        message: 'ERROR WHILE FETCHING DATA!',
        original: {},
    });
});


module.exports = routes;