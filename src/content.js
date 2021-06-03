import React from "react";
import styled from 'styled-components'
import Button from "@material-ui/core/Button";

export const StyledLink = styled(Button)`
  color: palevioletred;
  font-weight: bold;
  background: green;
`;

const Content = () => {
  return (
    <div>
      <p>Bonjour</p>
      <p>A tous </p>
      <StyledLink>mon boutton</StyledLink>

    </div>
  );
};
export default Content;
