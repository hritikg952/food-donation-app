import firebase from "firebase";
import * as actionType from "../actionType";

export const fetchUser = (dispatch) => {
  console.log("fetch triggered");
  return firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        dispatch({
          type: actionType.SET_USER,
          payload: {
            uid: firebase.auth().currentUser.uid,
            email: snapshot.data().email,
            name: snapshot.data().name,
            phonenumber: snapshot.data().phonenumber,
          },
        });
        return {
          status: true,
        };
      } else {
        console.log("do not exist");
        return {
          status: false,
          error: "User do not exist",
        };
      }
    })
    .catch((err) => {
      console.log("fetch err", err);
      return {
        status: false,
        error: err,
      };
    });
};
