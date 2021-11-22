//combines two operations
import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {

    render() {
        //class property // .movies collection of movies //special map fucntion to break them up into individual movies
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie} ReloadData= {this.props.ReloadData}></MovieItem>
        })

    }

}