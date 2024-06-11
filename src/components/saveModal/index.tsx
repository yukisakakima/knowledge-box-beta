import { Button } from "../button";
import { FunctionComponent, useState } from "react";
import { Control, Modal, TitleInput, Wrapper } from "./styled";

interface Props {
  onSave: (title: string) => void;
  onCancel: () => void;
}

export const SaveModal: FunctionComponent<Props> = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState(new Date().toISOString());

  return (
    <Wrapper>
      <Modal>
        <p>テキストの内容を保存します。</p>
        <p>保存内容のタイトルを入力して「保存」ボタンを押してください。</p>
        <p>
          <TitleInput
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <Control>
          <Button onClick={onCancel} cancel>
            キャンセル
          </Button>
          <Button onClick={() => onSave(title)}>保存</Button>
        </Control>
      </Modal>
    </Wrapper>
  );
};
