const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/orders');


const dbUrl = "mongodb+srv://Rupank:" + process.env.MONGO_ALAS_PW + "@lmscluster-vcuw5.mongodb.net/test?retryWrites=true&authMechanism=SCRAM-SHA-1";
mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Origin,X-RequestedWith,Content-Type,Accept,Authorization");

    if (req.method === "OPTIONS") {
        res.header('Acess-Control-Allow-Methods', "PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
})
app.use('/courses', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 400).json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;