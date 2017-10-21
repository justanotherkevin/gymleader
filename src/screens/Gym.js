import React, { Component } from 'react';
import { FIREconfig } from '../config/fireConfig';
import firebase from 'firebase/app';
import 'firebase/database';

import GymInfo from '../components/gymInfo/gymInfo';
import GymForm from '../components/gymform/gymForm';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
        };

        this.app = firebase.initializeApp(FIREconfig);
        this.db = this.app.database().ref().child('gyms');
        this.addGym = this.addGym.bind(this)
    };

    componentWillMount() {
        const currentGyms = this.state.gyms
        // when you add something to the DB('child_added') it then set the state again
        this.db.on('child_added', snap => {
            currentGyms.push({
                id: snap.key,
                name: snap.val().gymName,
            })
            this.setState({
                gyms: currentGyms
            })
        })
    }

    addGym(gym) {
        // gym need to be an object with ID and stuff. ex. {id:1, name: 'kickass'}
        this.db.push().set({ gymName: gym});
    }

    render() {
        return (
            <div>
                <h1>This is the Gym</h1>
            <div>{
                this.state.gyms.map( (gym) => {
                    return (
                        <GymInfo gymId={ gym.id } gymName={ gym.name } />
                    )
                })
            }</div>
                <GymForm addGym={this.addGym}/>
            </div>
        );
    }
}
export default Gym;
