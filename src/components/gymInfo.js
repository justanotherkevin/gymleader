import React from 'react';
import { Redirect } from "react-router-dom";

class GymInfo extends React.Component {
    render() {
        const gym = this.props.selectedGym
        if (gym) {
            return (
                <div>
                    <p>this is new gyminfo</p>
                    <p>{gym.name}</p>
                    <p>{gym.location}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <button type="button" className="pt-button pt-large pt-icon-add">Add your gym to profile</button>
                </div>
            )
        }

    }
}
export default GymInfo
