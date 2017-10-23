import React from 'react';

class GymInfo extends React.Component {
    constructor(props){
        super(props);
        this.gymName = props.gymName;
        this.gymId = props.gymId;
    }
    render(props){
        return (
            <div>
                <p> gym name: { this.gymName }</p>
            </div>
        )
    }
}
export default GymInfo
