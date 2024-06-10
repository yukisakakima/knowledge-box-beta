import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #338c46;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 16px;
  height: 32px;
  min-width: 80px;
  padding: 0 16px;

  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`;
