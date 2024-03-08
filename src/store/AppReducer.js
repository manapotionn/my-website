export const UPDATE_ONE_VAL = "UPDATE_ONE_VAL";
export const UPDATE_ALL = "UPDATE_ALL";

const AppReducer = (state, action = {}) => {
  switch (action.type) {
    case UPDATE_ONE_VAL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.valToBeUpdated]: action.newValue,
        },
      };
    case UPDATE_ALL:
      return action.newValue;
    default:
      return state;
  }
};

export { AppReducer };
