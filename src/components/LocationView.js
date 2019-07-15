import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const LocationItem = styled.div`
  background: #191919;
  border-radius: 4px;
  padding: 15px;
  margin: 50px 0 0 0;
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

const LocationView = ({ location, actions }) => (
  <LocationItem>
    {console.log(location)}
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Avatar>H</Avatar>
      </Box>
      <Box display="flex" flexDirection="column" style={textContainer}>
        <Box>
          <Title>{location.location_name}</Title>
          <SubTitle>
            {location.address_1}, {location.city}, {location.state}{" "}
            {location.postal_code}
          </SubTitle>
        </Box>
      </Box>
    </Box>
  </LocationItem>
);

LocationView.propTypes = {
  location: PropTypes.object.isRequired
};

export default LocationView;
