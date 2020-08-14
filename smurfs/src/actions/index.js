import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAIL = 'POST_SMURFS_FAIL';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_SMURFS_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data}))
    .catch(error => dispatch({type: FETCH_SMURFS_FAIL, payload: `Smurfing smurf! There's been a smurfing error! ${error}`}))
};

export const postSmurfs = () => (dispatch) => {
    dispatch({type: POST_SMURFS_START})
    axios
    .post('http://localhost:3333/smurfs', {smurf})
    .then(res => dispatch({type: POST_SMURFS_SUCCESS, payload: smurf})
    .catch(error => dispatch({type: POST_SMURFS_FAIL, payload: `OH SMURF! Another smurfing error! ${error}`}))
    )
}
