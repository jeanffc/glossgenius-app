import {fetchCandidatesPending, fetchCandidatesSuccess, fetchCandidatesError} from '../store/ducks/candidates';

export default function fetchCandidates() {
    return dispatch => {
        dispatch(fetchCandidatesPending());
        fetch('https://exampleapi.com/candidates')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCandidatesSuccess(res.candidates);
            return res.candidates;
        })
        .catch(error => {
            dispatch(fetchCandidatesError(error));
        })
    }
}