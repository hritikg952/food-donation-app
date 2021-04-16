import * as actionType from "../actionType";
const initialState = {};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_USER:
      return {
        ...state,
        ...payload,
      };

    case actionType.REMOVE_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
