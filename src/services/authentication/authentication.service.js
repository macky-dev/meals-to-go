import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const register = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signout = () => {
  return firebase.auth().signOut();
};

// export const authStateChanged = firebase.auth().onAuthStateChanged;
