import React, { Component } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import styled from "styled-components";

import { IoIosCheckmark, IoIosClose } from "react-icons/io";

const ListItem = styled.li`
  padding: 15px;
  border
`;

const ApproveButton = styled.button`
  background: none;
  color: #8ca564;
  border: 2px solid #8ca564;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0 0 0 20px;
`;

const DenyButton = styled.button`
  background: none;
  color: #91647d;
  border: 2px solid #91647d;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0 0 0 20px;
`;

const textContainer = {
  marginLeft: 20,
};

export default class CandidateItem extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired,
    approveCandidate: PropTypes.func.isRequired,
    denyCandidate: PropTypes.func.isRequired
  };

  state = {};

  render() {
    const { candidate, approveCandidate, denyCandidate } = this.props;

    return (
      <ListItem>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="row" alignItems="center" flexGrow={1}>
            <Box>
              <Avatar>H</Avatar>
            </Box>
            <Box display="flex" flexDirection="column" style={textContainer}>
              <Box>
                <label>{candidate.name}</label>
              </Box>
              <Box>
                <label>{candidate.name}</label>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <ApproveButton onClick={() => approveCandidate(candidate.id)}>
              <IoIosCheckmark size={26} />
            </ApproveButton>

            <DenyButton onClick={() => denyCandidate(candidate.id)}>
              <IoIosClose size={26} />
            </DenyButton>
          </Box>
        </Box>
      </ListItem>
    );
  }
}
