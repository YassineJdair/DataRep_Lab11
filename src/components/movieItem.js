//combines two operations
import React from 'react';
import Card from 'react-bootstrap/Card'

export class MovieItem extends React.Component {

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
                </Card>




            </div>
        );
    }

}