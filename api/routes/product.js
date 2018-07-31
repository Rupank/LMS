const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/course');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /courses"
    });
});

router.post('/', (req, res, next) => {
    // const course = {
    //     courseID: req.body.courseName,
    //     price: req.body.coursePrice
    // }

    const course = new Product({
        _id: new mongoose.Types.ObjectId(),
        courseID: req.body.courseID,
        courseName: req.body.courseName,
        coursePrice: req.body.coursePrice
    })
    course.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POST requests to /courses",
        createdCourse: course
    });
});

router.get('/:courseID', (req, res, next) => {
    const id = req.params.courseID;
    if (id === 'Course_1') {
        res.status(200).json({
            message: "You have discovered the first course ID",
            id: id
        })
    } else {
        res.status(200).json({
            message: "Course Not Found"
        })
    }
});

router.patch('/:courseID', (req, res, next) => {
    res.status(200).json({
        message: "Updated Course"
    })
});

router.delete('/:courseID', (req, res, next) => {
    res.status(200).json({
        message: "Deleted Course"
    })
});

module.exports = router;