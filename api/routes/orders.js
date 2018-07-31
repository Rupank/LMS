const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders were fetched"
    })
});

router.post('/', (req, res, next) => {
    const course = {
        courseID: req.body.courseID,
        time: req.body.courseTime
    }
    res.status(201).json({
        message: "Orders were created",
        createdOrder: course
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(201).json({
        message: "Orders details ",
        orderID: req.params.orderID
    })
});

router.delete('/:orderID', (req, res, next) => {
    res.status(201).json({
        message: "Orders details DELETED",
        orderID: req.params.orderID
    })
});

module.exports = router;