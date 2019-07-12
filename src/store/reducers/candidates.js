const initialState = [
  {
    id: 0,
    image: "http://",
    name: "teste",
    approved: false
  }
];

export default function candidates(state = initialState, action) {
  switch (action.type) {
    case "APPROVE_CANDIDATE":
      return state.map(candidate =>
        candidate.id === action.id
          ? { ...candidate, approved: !candidate.approved }
          : candidate
      );
    case "DENY_CANDIDATE":
      return state.filter(candidate => candidate.id !== action.id);

    default:
      return state;
  }
}
