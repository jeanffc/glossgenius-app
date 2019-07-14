import React from "react";
import PropTypes from "prop-types";
import CandidateItem from "./CandidateItem";

import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CandidateList = ({ candidates, actions }) => (
  <List>
    {console.log(candidates)}
    {candidates.map(candidate => (
      <CandidateItem key={candidates.indexOf(candidate)} candidate={candidate} {...actions} />
    ))}
  </List>
);

CandidateList.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      approved: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default CandidateList;
