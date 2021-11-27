const express = require('express');
const cors = require('cors');
const path = require('path');
const dataRouter = require('./app/routes/list-data');
const logger = require('morgan');
const cookieParser = require('cookie-parser');


var labels = ['label 1', 'label 2'];
var data = ['datapoint1', 'datapoint2'];



const app = express();

var corsOption = {
    origin: "http://localhost:8980"
}


app.use('/show', dataRouter);


app.set('views', path.join(__dirname, 'app', 'views'))
app.set('view engine', 'ejs');

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public'));

// app.use((req, res, next)=>{
//     next(createError(404));
// })

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status ||500);
    res.send(err.message);
})

app.get('/', (req, res)=>{
    res.send({message: "test"})
})

var labels = ['label 1', 'label 2'];
// var data = [datapoint1, datapoint2];
// const host = '0.0.0.0'
const PORT = process.env.PORT || 8989;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
