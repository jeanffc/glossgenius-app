import React from "react";
import PropTypes from "prop-types";
import CandidateItem from "./CandidateItem";

const CandidateList = ({ candidates, actions }) => (
  <ul>
    {console.log(candidates)}
    {candidates.map(candidate => (
      <CandidateItem key={candidate.id} candidate={candidate} {...actions} />
    ))}
  </ul>
);

CandidateList.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      approved: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default CandidateList;
