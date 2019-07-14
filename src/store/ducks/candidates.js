// Action Types

export const APPROVE_CANDIDATE = "APPROVE_CANDIDATE";
export const DENY_CANDIDATE = "DENY_CANDIDATE";
export const FETCH_CANDIDATES_PENDING = "FETCH_CANDIDATES_PENDING";
export const FETCH_CANDIDATES_SUCCESS = "FETCH_CANDIDATES_SUCCESS";
export const FETCH_CANDIDATES_ERROR = "FETCH_CANDIDATES_ERROR";

// Action Creators

export const approveCandidate = id => ({
  type: APPROVE_CANDIDATE,
  id
});

export const denyCandidate = id => ({
  type: DENY_CANDIDATE,
  id
});

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

// Reducers

const initialState = {
  pending: false,
  error: null,
  location_admin_name: "Nic Jones",
  location_name: "Nic J Salon",
  api_identifier: "abc1234",
  address_1: "3224 Stratford Court",
  address_2: "Suite 6",
  city: "Morrisville",
  state: "NC",
  postal_code: "27650",
  candidates: [
    {
      id: "3677skjx",
      full_name: "Lanita Smith",
      image_url: "https://test-s3.com/blah-blah-blah",
      business_name: "LaNails 5th Avenua",
      approved: false
    },
    {
      id: "3677skja",
      full_name: "Lanita Smith",
      image_url: "https://test-s3.com/blah-blah-blah",
      business_name: "LaNails 5th Avenua",
      approved: false
    },
    {
      id: "3677skjq",
      full_name: "Lanita Smith",
      image_url: "https://test-s3.com/blah-blah-blah",
      business_name: "LaNails 5th Avenua",
      approved: false
    },
    {
      id: "3677skjv",
      full_name: "Lanita Smith",
      image_url: "https://test-s3.com/blah-blah-blah",
      business_name: "LaNails 5th Avenua",
      approved: false
    }
  ]
};

export default function candidates(state = initialState, action) {
  let candidates = state.candidates;
  switch (action.type) {
    case APPROVE_CANDIDATE:
      candidates = state.candidates.map(candidate =>
        candidate.id === action.id
          ? { ...candidate, approved: !candidate.approved }
          : candidate
      );
      return { ...state, candidates };
    case DENY_CANDIDATE:
      candidates = state.candidates.filter(
        candidate => candidate.id !== action.id
      );
      return { ...state, candidates };

    default:
      return state;
  }
}
