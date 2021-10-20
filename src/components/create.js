//combines two operations
import React from 'react';

export class Create extends React.Component {

    constructor() {
        super();
        
        //provides the scripts data to be executed whenever the submit event is occurred
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        
        // used by React to represent information about the components current situation
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    
    //onchange attributes fires the moment the value of the element is changed
    onChangeTitle(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Title: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeYear(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Year: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangePoster(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Poster: e.target.value
        });
    }
    //onchange attributes fires the moment the value of the element is changed
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " +
              "Year :" + this.state.Year + " " +
              "Poster: " + this.state.Poster);

            this.setState({
                Title: '',
                Year: '',
                Poster: ''

            })
    }
    
    //turns website code into the interactive pages users see
    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page //jsx code
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title:</label>
                        //input maintains its own state and gets updated based on user input can only be updated by using setState()
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangeTitle}></input>

                    </div>
                    <div className="form,-group">
                        <label>Add Movie Year:</label>
                        //input maintains its own state and gets updated based on user input can only be updated by using setState()
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster:</label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        //onchange attributes fires the moment the value of the element is changed
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        //input maintains its own state and gets updated based on user input can only be updated by using setState()
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }

}
