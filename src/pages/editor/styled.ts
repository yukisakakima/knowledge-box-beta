import styled from "@emotion/styled";

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 20px;
`;

export const MainEditor = styled.div`
  display: flex;
  height: calc(100vh - 200px);
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
  padding-top: 10px;
`;

export const URLInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #fff;
`;
