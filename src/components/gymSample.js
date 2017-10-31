import React from 'react';
import { Button, Position, Toaster, Intent } from "@blueprintjs/core";

class GymSample extends React.Component {
    constructor(props){
        super(props);
        this.gymName = props.gymName;
        this.gymId = props.gymId;
        this.state = {
            selectedGym: null,
        }
    }
    render(props){
        return (
            <div className="single-gym-wrapper">
                <p> gym name: { this.gymName }</p>
                <Button type="Button" className="pt-button">
                    click me
                    <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </Button>
            </div>
        )
    }
}
export default GymSample
