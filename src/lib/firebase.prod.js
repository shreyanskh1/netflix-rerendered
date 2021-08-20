import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the DB

// we need a config here
const config = {
  apiKey: 'AIzaSyCzhYHskkT3AqaV2SS4wf1PZAq4Dq6_o1U',
  authDomain: 'netflix-rerendered.firebaseapp.com',
  projectId: 'netflix-rerendered',
  storageBucket: 'netflix-rerendered.appspot.com',
  messagingSenderId: '133398000120',
  appId: '1:133398000120:web:db3bc64976355d7566a60d',
};

const firebase = Firebase.initializeApp(config);

// used - ' seedDatabase(firebase); ' while seeding database. Should remain disabled otherwise it would cause duplication of data in the Cloud Firestore.

export { firebase };
