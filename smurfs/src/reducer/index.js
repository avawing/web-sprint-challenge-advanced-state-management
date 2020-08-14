import {
  FETCH_SMURFS_FAIL,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  POST_SMURFS_FAIL,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_START,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  errors: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    case POST_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
      };
    case POST_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
  console.log
}

export default reducer;
