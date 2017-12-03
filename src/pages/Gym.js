import React, { Component } from 'react';
import 'firebase/database';
import { fire } from '../config/fireConfig';

import { newUser } from '../firebase/action.js';

import GymSample from '../components/gymSample';
import GymForm from '../components/gymForm';
import GymInfo from '../components/gymInfo';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
            selectedGym: null,
        };
        // grap gyms from firebase
        this.db = fire.database().ref().child('gyms');
        this.addGym = this.addGym.bind(this);
        this.setSelectedGym = this.setSelectedGym.bind(this);
    };
    // willMount occure before render
    componentWillMount() {
        var currentGyms = this.state.gyms;

        // when you add something to the DB('child_added') it then set the state again
        // child_added is triggered once for EACH EXISTING child and then again every time a new child is added to the specified path.
        this.db.on('child_added', snap => {
            currentGyms.push({
                id: snap.key,
                name: snap.val().name,
                location: snap.val().location
            })
            this.setState({
                gyms: currentGyms
            })
        })
    }
    // add to firebase
    addGym(name, location) {
        this.db.push().set({ name: name, location: location});
    }
    setSelectedGym(gym) {
        this.setState({
            selectedGym: gym
        })
    }
    render() {
        const showGyms = this.state.gyms.map( (gym) => {
            return (
                <GymSample key={ gym.id }
                    sampleGym={ gym }
                    selecteGym={this.setSelectedGym}
                />
            )
        });

        return (
            <div className="gympage-wrapper">
                <div className="gyms-wrapper">
                    { showGyms }
                </div>
                <div className="add-gym-wrapper">
                    <GymForm addGym={this.addGym}/>
                </div>
                <div className="gyminfo-wrapper jumbotron">
                    <GymInfo selectedGym={this.state.selectedGym}/>
                </div>
            </div>
        );
    }
}
export default Gym;
