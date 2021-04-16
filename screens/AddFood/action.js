import firebase from "firebase";

export const addDonation = (data, store) => {
  const state = store.getState();
  console.log("state", state.user);
  return firebase
    .firestore()
    .collection("donations")
    .doc()
    .set({
      ...data,
      userId: state.user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      firebase
        .firestore()
        .collection("users")
        .doc(store.user.uid)
        .collection("donations")
        .update({
          ...data,
          userId: state.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      return {
        status: true,
      };
    })
    .catch((err) => {
      return {
        status: false,
        error: err,
      };
    });
};
