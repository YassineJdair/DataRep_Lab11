//combines two operations
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    //store data to be used in class
    state = {
        movies: []
    };

    //component life cycle method //gets called when component is active
    componentDidMount() {
        //axios is promise based http client
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            //fullfilled state
            .then((response) => {
                this.setState({ movies: response.data.movies })
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
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }

}