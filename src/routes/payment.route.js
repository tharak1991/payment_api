const express = require('express');
const routes = express.Router();
const payment_controller = require('../controllers/payment.controller');




routes.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
         await payment_controller.getById(id);
         await res.status(200).json({
                    status: true,
                    
                });
        // if (user) {
        //     await res.status(200).json({
        //         status: true,
        //         user: user
        //     });
        // } else {
        //     await res.status(200).json({
        //         status: false,
        //         user: user,
        //         msg: 'User not found'
        //     });
        // }
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