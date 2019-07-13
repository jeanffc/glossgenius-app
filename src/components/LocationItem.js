import React from "react";
import PropTypes from "prop-types";

// import styled from "styled-components";

const LocationItem = ({ candidates, actions }) => (
  <div>
    {console.log(candidates)}
    {candidates.map(candidate => (
      <p>{candidate.name}</p>
    ))}
  </div>
);

LocationItem.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      approved: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default LocationItem;
