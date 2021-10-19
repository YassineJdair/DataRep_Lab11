//combines two operations
import React from 'react';

export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " +
              "Year :" + this.state.Year + " " +
              "Poster: " + this.state.Poster
            );
    }

    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page //jsx code
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>

                    </div>
                    <div className="form,-group">
                        <labe>Add Movie Year:</labe>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster:</label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>



                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }

}
