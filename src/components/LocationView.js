import React from "react";
import PropTypes from "prop-types";

// import styled from "styled-components";

const LocationView = ({ candidates, actions }) => (
  <div>
    {console.log(candidates)}
    <ul>
      {candidates.map(candidate => (
        <li key={candidates.indexOf(candidate)}>{candidate.full_name}</li>
      ))}
    </ul>
  </div>
);

LocationView.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      approved: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default LocationView;
