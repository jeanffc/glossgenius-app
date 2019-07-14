export const APPROVE_CANDIDATE = "APPROVE_CANDIDATE";
export const DENY_CANDIDATE = "DENY_CANDIDATE";
export const FETCH_CANDIDATES_PENDING = "FETCH_CANDIDATES_PENDING";
export const FETCH_CANDIDATES_SUCCESS = "FETCH_CANDIDATES_SUCCESS";
export const FETCH_CANDIDATES_ERROR = "FETCH_CANDIDATES_ERROR";

export const approveCandidate = id => ({ type: APPROVE_CANDIDATE, id });

export const denyCandidate = id => ({ type: DENY_CANDIDATE, id });

export const fetchCandidatesPending = () => ({
  type: FETCH_CANDIDATES_PENDING
});

export const fetchCandidatesSuccess = candidates => ({
  type: FETCH_CANDIDATES_SUCCESS,
  candidates
});

export const fetchCandidatesError = error => ({
  type: FETCH_CANDIDATES_ERROR,
  error: error
});
