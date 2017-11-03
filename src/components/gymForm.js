import React, { Component } from 'react';

class GymForm extends Component {
    handleUserSubmit = (e) => {
        e.preventDefault()
        this.props.addGym(this.refs.gym_name.value, this.refs.gym_location.value)
    }
    render() {
        return(
            <div className="gymForm_wrapper">
                <form className="new_gym_form"
                    ref="new_gym_form">
                    <input className="new_gym_name"
                        placeholder="enter a gym name"
                        ref="gym_name"
                    />
                    <input className="new_gym_location"
                        placeholder="enter location"
                        ref="gym_location"
                    />
                    <button className="gymForm_button"
                        onClick={this.handleUserSubmit}
                        >Add gym button
                    </button>
                    <input type="hidden" value="Submit" />
                </form>
            </div>
        )
    };
};
export default GymForm;
