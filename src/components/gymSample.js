import React from 'react';
import { Button, Position, Toaster, Intent } from "@blueprintjs/core";

class GymSample extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="single-gym-wrapper">
                <p>
                    gym name: {this.props.sampleGym.name }
                </p>
                <p>
                    gym location: {this.props.sampleGym.location }
                </p>
                <Button type="Button"
                    className="pt-button"
                    onClick={() => {
                        this.props.selecteGym(this.props.sampleGym)
                    } }>
                    click me
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </Button>
            </div>
        )
    }
}
export default GymSample
