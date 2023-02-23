import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  background: pink;
  padding: 0.2rem;
  margin: 0.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #db7088;
  }
`;

export default Button;
