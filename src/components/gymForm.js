import React, { Component } from 'react';

class GymForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGymInfo: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    };
    handleUserInput(e) {
        this.setState({
            newGymInfo: e.target.value,
        })
    };
    handleUserSubmit() {
        this.props.addGym(this.state.newGymInfo)
        this.setState({
            newGymInfo: '',
        })
    }
    render() {
        return(
            <div className="gymForm_wrapper">
                <input className="gymForm"
                    placeholder="enter a gym name"
                    value={this.state.newGymInfo}
                    onChange={this.handleUserInput}
                />
                <button className="gymForm_button"
                    onClick={this.handleUserSubmit}
                >Add gym button</button>
            </div>
        )
    };
};
export default GymForm;
