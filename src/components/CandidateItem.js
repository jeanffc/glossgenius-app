import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { IoIosCheckmark, IoIosClose } from "react-icons/io";

const Container = styled.div`
  
`;

const Actions = styled.div`
  display: initial;
`;

const ApproveButton = styled.button`
  background: none;
  color: green;
  border-width: 1px;
  border-radius: 100%;
  border-color: green;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0;
`;

const DenyButton = styled.button`
  background: none;
  color: red;
  border-width: 1px;
  border-radius: 100%;
  border-color: red;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0;
`;

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
      <Container>
        <label>{candidate.name}</label>
        <Actions>
          <ApproveButton onClick={() => approveCandidate(candidate.id)}>
            <IoIosCheckmark size={28} />
          </ApproveButton>

          <DenyButton onClick={() => denyCandidate(candidate.id)}>
            <IoIosClose size={28} />
          </DenyButton>
        </Actions>
      </Container>
    );

    return <li>{element}</li>;
  }
}
