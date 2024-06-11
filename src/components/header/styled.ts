import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #333;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  & > * {
    margin-left: 8px;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
`;
