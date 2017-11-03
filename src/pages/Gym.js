import React, { Component } from 'react';
import 'firebase/database';
import { fire } from '../config/fireConfig';

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
        this.db = fire.database().ref().child('gyms');
        this.addGym = this.addGym.bind(this);
        this.setSelectedGym = this.setSelectedGym.bind(this);
    };

    componentWillMount() {
        const currentGyms = this.state.gyms
        // when you add something to the DB('child_added') it then set the state again
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
            <div>
                <h1>This is the Gym</h1>
                <div className="gyms-wrapper">
                    { showGyms }
                </div>
                <GymForm addGym={this.addGym}/>
                <GymInfo selectedGym={this.state.selectedGym}/>
            </div>
        );
    }
}
export default Gym;
