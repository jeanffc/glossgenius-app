import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  margin: 50px 0 50px 0;
`;

const Admin = styled.h1`
  font-size: 2.2em;
  padding: 0;
  margin: 0 0 80px 0;
`;

const Title = styled.p`
  font-size: 1.8em;
  padding: 0;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  opacity: 0.6;
  padding: 0;
  margin: 0;
`;

const HeaderSection = ({ admin }) => (
  <Header>
    <Admin>{admin}</Admin>
    <Title>Action Required!</Title>
    <SubTitle>Please indicate who you will approve</SubTitle>
  </Header>
);

const mapStateToProps = state => ({
  admin: state.candidates.location_admin_name
});

export default connect(
  mapStateToProps,
  null
)(HeaderSection);
