import React, { Component } from 'react';
import trips from '../Resources/trips.json';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            place: '',
            type: ''
        }
    }


    renderDate = (e) => {
        this.setState({ date: e.target.value });
    }
    renderPlace = (e) => {
        this.setState({ place: e.target.value });
    }
    renderType = (e) => {
        if (e.target.value !== "") {
            this.setState({ type: e.target.value });
        }
    }
    submitButton = () => {
        alert("Successfully Sumitted.")
        trips.push(this.state);
        this.setState({
            date: '',
            place: '',
            type: ''
        });
    }
    render() {
        return (
            <>
                <div className="add-trip">
                    <h1>Add a trip</h1>
                    <div className="add">
                        <span>
                        <label htmlFor='trip-date'>Date:</label>
                        <input className='inputs' type='date' id='trip-date' onChange={this.renderDate}></input>
                        </span>
                        <span>
                        <label htmlFor='trip-place'>Place:</label>
                        <input className='inputs' type='text' id='trip-place' onChange={this.renderPlace}></input>
                        </span>
                        <span>
                        <label htmlFor='trip-type'>Type:</label>
                        <select className='inputs' id='trip-type' onClick={this.renderType}>
                            <option value=""></option>
                            <option value="Tropic">Tropic</option>
                            <option value="Trek">Trek</option>
                            <option value="Club">Club</option>
                        </select>
                        </span>
                        <button type='submit' className='but' onClick={this.submitButton}>Submit</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Add;