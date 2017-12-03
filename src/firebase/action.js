import 'firebase/database';
import { fire } from '../config/fireConfig';

// firebase = fire.database().ref().child('gyms');

export var newUser = (username, useremail) => {
  fire.database().ref().child('users').push().set({
    name: username,
    email: useremail,
  });
}




// fire.database().ref('users/' + 1111).set({
//   username: "kevin",
//   email: "email",
//   profile_picture : "imageUrl"
// });
