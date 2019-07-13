import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Header = styled.header`
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.8em;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  opacity: 0.6;
`;

const HeaderSection = () => (
  <Header>
    <h1>admin.name</h1>
    <Title>Action Required!</Title>
    <SubTitle>Please indicate who you will approve</SubTitle>
  </Header>
);

export default connect(
  null,
  {}
)(HeaderSection);
