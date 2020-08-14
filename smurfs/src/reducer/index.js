import {FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS,FETCH_SMURFS_START} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    errors: ''
}

function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_SMURFS_START :
            return {
                ...state, isLoading: true
            }
        case FETCH_SMURFS_SUCCESS :
            return {
                ...state, 
                smurfs : action.payload,
                isLoading: false
            }
        case FETCH_SMURFS_FAIL :
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }
        default: return state
    }
}

export default reducer