import styled from "styled-components";

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  height: calc(100vh - 500px);
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 100%;
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  color: #fff;
`;

export const Preview = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const URLForm = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  margin: 20px;
`;

export const URLInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: #222;
  color: #fff;
`;

export const LinkPreview = styled.div`
  margin-top: 20px;
  a {
    font-size: 16px;
    color: #1e90ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
