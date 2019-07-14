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
    case "APPROVE_CANDIDATE":
      candidates = state.candidates.map(candidate =>
        candidate.id === action.id
          ? { ...candidate, approved: !candidate.approved }
          : candidate
      );
      return { ...state, candidates };
    case "DENY_CANDIDATE":
      candidates = state.candidates.filter(
        candidate => candidate.id !== action.id
      );
      return { ...state, candidates };

    default:
      return state;
  }
}

// export const getCandidates = state => state.candidates;
// export const getCandidatesPending = state => state.pending;
// export const getCandidatesError = state => state.error;
