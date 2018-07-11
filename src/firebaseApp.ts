import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    /* add the firebase config object here */
});

export const db = firebaseApp.database();
export default firebaseApp;
