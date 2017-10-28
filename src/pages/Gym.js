import React, { Component } from 'react';
import { fire } from '../config/fireConfig';

import firebase from 'firebase/app';
import 'firebase/database';

import GymInfo from '../components/gymInfo';
import GymForm from '../components/gymForm';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
        };
        this.db = fire.database().ref().child('gyms');
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
        const storeGyms = this.state.gyms;
        const showGyms = storeGyms.map( (gym) => {
            return (
                <GymInfo key={ gym.id } gymId={ gym.id } gymName={ gym.name } />
            )
        });

        return (
            <div>
                <h1>This is the Gym</h1>
                <div className="gyms-wrapper">
                    { showGyms }
                </div>
                <GymForm addGym={this.addGym}/>
            </div>
        );
    }
}
export default Gym;
