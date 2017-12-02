import 'firebase/database';
import { fire } from '../config/fireConfig';

this.db = fire.database().ref().child('gyms');
console.log('hello')
