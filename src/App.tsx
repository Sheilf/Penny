import logo from './logo.svg';
import { useEffect, useState } from 'react';

import './App.css';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';



const config = ({
  // your config
  apiKey: "AIzaSyAVTX37cgDceP0X0ds0eN-h6lvpRobg7VY",
  authDomain: "penny-39b61.firebaseapp.com",
  projectId: "penny-39b61",
  storageBucket: "penny-39b61.appspot.com",
  messagingSenderId: "405634450051",
  appId: "1:405634450051:web:a705be6308d415852e91b6",
  measurementId: "G-YD34PL3LGZ"
})

firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

  ],

  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};


function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>pls sign in</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      
      <h3 style={{ display: 'flex', justifyContent: 'center'}}
      >Welcome {firebase.auth().currentUser?.displayName}! You are now signed-in! Now go fuck yourself!\\</h3>
      
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

      <button style={{ display: 'flex', justifyContent: 'center'}} onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    </div>
  );
}


export default SignInScreen;

