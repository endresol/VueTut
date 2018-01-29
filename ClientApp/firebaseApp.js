
import firebase from 'firebase';
// Initialize Firebase

const config = {
  apiKey: "AIzaSyAq4M3sqAj15sP6_XDYpH6bgIHFgAc3eZc",
  authDomain: "turnout-2f3cd.firebaseapp.com",
  databaseURL: "https://turnout-2f3cd.firebaseio.com",
  projectId: "turnout-2f3cd",
  storageBucket: "",
  messagingSenderId: "823578218733"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebase.database().ref().child('events');
