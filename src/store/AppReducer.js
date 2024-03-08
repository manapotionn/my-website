export const OPEN_WINDOW = "OPEN_WINDOW";

const AppReducer = (state, action = {}) => {
  switch (action.type) {
    case OPEN_WINDOW:
      return {
        ...state,
        [action.id]: {
          ...[action.id],
          open: action.newValue,
        },
      };
    default:
      return state;
  }
};

export { AppReducer };
