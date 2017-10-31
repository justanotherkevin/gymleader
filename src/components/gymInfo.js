import React from 'react';

class GymInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const gym = this.props.selectedGym
        if (gym) {
            return (
                <div>
                    <p>this is new gyminfo</p>
                    <p>{gym.name}</p>
                </div>
            )
        } else {
            return (
                <div>loading...</div>
            )
        }

    }
}
export default GymInfo
