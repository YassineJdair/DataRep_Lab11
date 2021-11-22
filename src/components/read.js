//combines two operations
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    //gets called for delete event
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    //store data to be used in class
    state = {
        movies: []
    };
    //component life cycle method //gets called when component is active
    componentDidMount() {
        //axios is promise based http client
        axios.get('http://localhost:4000/api/movies')
            //fullfilled state
            .then((response) => {
                this.setState({ movies: response.data})
            })
            .catch((error) => {
                    console.log(error)
                });
    }

    //gathers movies in database
    ReloadData(){
                //axios is promise based http client
                axios.get('http://localhost:4000/api/movies')
                //fullfilled state
                .then((response) => {
                    this.setState({ movies: response.data})
                })
                .catch((error) => {
                        console.log(error)
                    });
    }

    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page
            <div>
                <h3>Movies Showing</h3>
                {/* jsx */}
                <Movies movies={this.state.movies} ReloadData = {this.ReloadData} ></Movies>
            </div>
        );
    }

}