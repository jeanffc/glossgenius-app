import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CandidateItem extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired,
    approveCandidate: PropTypes.func.isRequired,
    denyCandidate: PropTypes.func.isRequired
  };

  state = {};

  render() {
    const { candidate, approveCandidate, denyCandidate } = this.props;

    let element;

    element = (
      <div>
        <label>{candidate.name}</label>
        <button onClick={() => approveCandidate(candidate.id)} />
        <button onClick={() => denyCandidate(candidate.id)} />
      </div>
    );

    return <li>{element}</li>;
  }
}
