export const carouselReducer = (state, action) => {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired
      };
    case "next":
      return {
        ...state,
        desired: next(action.length, state.active)
      };
    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active)
      };
    case "done":
      return {
        ...state,
        offset: NaN,
        active: state.desired
      };
    case "drag":
      return {
        ...state,
        offset: action.offset
      };
    default:
      return state;
  }
};
