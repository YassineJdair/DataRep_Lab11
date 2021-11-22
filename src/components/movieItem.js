//combines two operations
import React from 'react';
import Card from 'react-bootstrap/Card';
//link helps change url of application
import {Link} from 'react-router-dom';
//delete button
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export class MovieItem extends React.Component {

    //constructor to bind
    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);

    }

    //delete movie method that logs to console
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);

        //axios calls delete method and calls http url
        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page
            <div>
                <h4>{this.props.movie.title}</h4>
                <p>{this.props.movie.Type}</p>

                {/* //Card Header from bootstrap makes app look neater */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* link helps change url of application */}
                    <Link to ={"/edit/" + this.props.movie._id} className = 'btn btn-primary'>Edit</Link>
                    {/* red delete button, goes to server and envokes route point */}
                    <Button variant = "danger" onClick = {this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );
    }

}
