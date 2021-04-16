import firebase from "firebase";
import * as actionType from "../actionType";
import { fetchUser } from "./userActions";
export const signup = (data, dispatch) => {
  const { email, password, name, phonenumber } = data;
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((user) => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name,
          email,
          phonenumber,
        });
      return user.user;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const login = (data, dispatch) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(data.email.trim(), data.password)
    .then((user) => {
      return {
        status: true,
      };
    })
    .catch((error) => {
      return {
        success: false,
        error: error,
      };
    });
};

export const signout = (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then((data) => {
      console.log("signout done", data);
      dispatch({
        type: actionType.REMOVE_USER,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
