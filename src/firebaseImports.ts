import firebase from 'firebase/app';
import './firebase-config';

export let database = firebase.firestore();
export let storage = firebase.storage();
export let auth = firebase.auth();
