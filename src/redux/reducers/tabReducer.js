import { ACTIVE_TAB } from "../constants/tabConstants";

const initialState = {
  activeTab: "blogs",
};

export default function tabReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
}
