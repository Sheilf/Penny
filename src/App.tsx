import { useEffect, useState } from 'react';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './firebaseConfig.ts';


import {SectorGrid} from './SectorGrid/SectorGrid';
import { Views } from './App.data';

const uiConfig: Object = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google as auth provider.
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


  //User visits "/" home route. If the user's auth state is active, show the list of sector forums.
  //If it's the user's first log in, set the user into the Users database collection.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      setIsSignedIn(!!user);
      setIsLoading(false)
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);


  //Todo: find a splash screen loader
  if(isLoading){
    return <div>{Views.loaders.basic}</div>
  }


  //If the user is not signed in, show the login view.
  if (!isSignedIn) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img style={{width:200, height: 250}} src={Views.images.funnyChicken} />

        <h1>{Views.headings.appName}</h1>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }



  let user = firebase.auth().currentUser?.uid;
  let db = firebase.firestore();

  db.collection(Views.collection.users).doc(user).set({
    id: user,
    name: firebase.auth().currentUser?.displayName
  })

  let usersDB = db.collection(Views.collection.users)
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
      <div className="flex-row-centered">
        <SectorGrid />
      </div>
    </div>
  );
}


export default SignInScreen;

