import React, {Component} from 'react';
import {FIREconfig} from '../config/fireConfig';
import firebase from 'firebase/app';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
        };

        this.app = firebase.initializeApp(FIREconfig);
        this.db = this.app.database().ref.child('gyms');
        this.addGym = this.addGym.bind(this)
    };

    componentWillMount() {
        const previousGyms = this.state.gyms
    }

    addGym(gym) {
        // gym need to be an object with ID and stuff. ex. {id:1, name: 'kickass'}
        const currentGyms = this.state.gyms;
        currentGyms.push(gym);
        this.setState({
            gyms: currentGyms
        })
    }

    render() {
        return (
            <div>
                <h1>This is the Gym</h1>
            </div>
        );
    }
}
export default Gym;
