const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//connecting application with mongodb
const myConnectionString = 'mongodb+srv://admin:Yassine12@cluster0.bagqx.mongodb.net/movies?retryWrites=true&w=majority'

//connectin with mongoose
mongoose.connect(myConnectionString);

//create a new database schema
const Schema = mongoose.Schema;

//generated schema
var movieSchema = new Schema({

    title: String,
    year: String,
    poster: String

});

//use the schema to create a new "movie" database model.
var MovieModel = mongoose.model("Movie", movieSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//route point
app.get('/api/movies', (req, res) => {

    //constant that contains movie information
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ];

    //callback function
    MovieModel.find((err, data) => {
        res.json(data);
    })

    //sending json, message and a status code
    // res.status(200).json({
    //     message: "Everything is Ok",
    //     movies: mymovies
    // });
})

//listens for put request to edit movies
app.put('/api/movies/:id', (req, res)=>{
    console.log('Updating: '+req.params.id)
 
    //interact with database find and update field
    MovieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, data)=>{
            res.send(data);
        })
})

//listen for get request
app.get('/api/movies/:id', (req,res) => {
    //function passes id
    console.log(req.params.id);

    //use id tp find in database
    MovieModel.findById(req.params.id, (err, data) =>{
        //send data back
        res.json(data);
    })
})


//listen for post request
app.post('/api/movies', (req, res) => {

    //log console
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })

    //stop duplicaiton
    res.send('Item Added');

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
