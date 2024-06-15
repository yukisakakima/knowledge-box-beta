import styled from "@emotion/styled";

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

export const Wrapper = styled.div`
  bottom: 3rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
  overflow-y: scroll;
`;

export const Memo = styled.button`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  width: 100%;
  padding: 1rem;
  margin: 24px 0;
  text-align: left;
`;

export const MemoTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const MemoText = styled.div`
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Paging = styled.div`
  bottom: 0;
  height: 3rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem;
  position: fixed;
  right: 0;
  text-align: center;
`;

export const PagingButton = styled.button`
  background: none;
  border: none;
  display: inline-block;
  height: 2rem;
  padding: 0.5rem 1rem;

  &:disabled {
    color: silver;
  }
`;
