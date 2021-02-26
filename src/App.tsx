import { useEffect, useState } from 'react';

import './App.css';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './firebaseConfig.ts';



const uiConfig: Object = {
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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      setIsSignedIn(!!user);
      setIsLoading(false)
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);


  if(isLoading){
    return <div>Loading Penny...</div>
  }

  if (!isSignedIn) {
    return (
      <div style={{textAlign: 'center'}}>
        <img style={{width:200, height: 250}} src="https://1.bp.blogspot.com/-Z_YeiWqz1HQ/WFoXrBdnbKI/AAAAAAAFkfA/v_8lPwKaOMkUxEWI_4Pmbfa4C5F9kyE8wCLcB/s1600/AW353933_00.gif3" />
        <h1>Penny</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }


  let user = firebase.auth().currentUser?.uid;
  let db = firebase.firestore();

  db.collection("Users").doc(user).set({
    id: user,
    name: firebase.auth().currentUser?.displayName
  })

  let usersDB = db.collection("Users")
  let currentUserDocument = usersDB.doc(user);

  let photoURL = firebase.auth().currentUser?.photoURL || ''

  currentUserDocument.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });


  return (
    <div>
      
      <h3 style={{ display: 'flex', justifyContent: 'center'}}>
        <img style={{borderRadius:"40%"}}src={photoURL} /> {firebase.auth().currentUser?.displayName}
      </h3>

      <div>User ID: {user}</div>

      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

      <button style={{ display: 'flex', justifyContent: 'center'}} onClick={() => firebase.auth().signOut()}>Sign-out</button>

      </div>
    </div>
  );
}


export default SignInScreen;

