import React, { Component } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import styled from "styled-components";

import { IoIosCheckmark, IoIosClose } from "react-icons/io";

const ListItem = styled.li`
  padding: 15px;
`;

const ApproveButton = styled.button`
  background: none;
  color: #8ca564;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0 0 0 20px;
  border: ${props =>
    props.type === "approved" ? "none" : "2px solid #8ca564"};
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
  display: ${props =>
    props.type === "approved" ? "none" : "block"};
`;

const Title = styled.p`
  font-size: 1em;
  padding: 0;
  margin: 0 0 5px 0;
`;

const SubTitle = styled.p`
  font-size: 0.8em;
  opacity: 0.6;
  padding: 0;
  margin: 0;
`;

const textContainer = {
  marginLeft: 20
};

export default class CandidateItem extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired,
    approveCandidate: PropTypes.func.isRequired,
    denyCandidate: PropTypes.func.isRequired
  };

  state = {};

  render() {
    const {
      candidate,
      approveCandidate,
      denyCandidate
      // showDialog
    } = this.props;

    return (
      <ListItem type={candidate.approved ? "approved" : null}>
        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Avatar>H</Avatar>
            </Box>
            <Box display="flex" flexDirection="column" style={textContainer}>
              <Box>
                <Title>{candidate.full_name}</Title>
              </Box>
              <Box>
                <SubTitle>{candidate.business_name}</SubTitle>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <ApproveButton
              type={candidate.approved ? "approved" : null}
              onClick={() => approveCandidate(candidate.id)}
            >
              <IoIosCheckmark size={26} />
            </ApproveButton>

            <DenyButton
              type={candidate.approved ? "approved" : null}
              onClick={() => {
                // showDialog("Are you sure you want to decline this person?");
                denyCandidate(candidate.id);
              }}
            >
              <IoIosClose size={26} />
            </DenyButton>
          </Box>
        </Box>
      </ListItem>
    );
  }
}
