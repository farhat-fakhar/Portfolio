const reducer = (state, action) => {
  switch (action.type) {
    case "SelectValue":
      return {
        ...state,
        selectValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
