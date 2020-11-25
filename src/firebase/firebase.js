import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAniBvo14s1mOEIRi4nHUWi5VtPM61a9uI",
    authDomain: "bikroy-clone.firebaseapp.com",
    databaseURL: "https://bikroy-clone.firebaseio.com",
    projectId: "bikroy-clone",
    storageBucket: "bikroy-clone.appspot.com",
    messagingSenderId: "658514105557",
    appId: "1:658514105557:web:736a2649a23ded5281be5c",
    measurementId: "G-ZVHVTPCYQM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_photos');
  provider.addScope('email');

  firebase.auth().useDeviceLanguage();

  export const signInWithFacebook = () => { firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    localStorage.setItem('name', user.displayName);
    localStorage.setItem('email', user.email);
    localStorage.setItem('photo', user.photoURL);
    window.location.reload();
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export const logOut = () => { firebase.auth().signOut().then(function() {
  // Sign-out successful.
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('photo');
  window.location.reload();
}).catch(function(error) {
  console.log(error.message);
  // An error happened.
});
}