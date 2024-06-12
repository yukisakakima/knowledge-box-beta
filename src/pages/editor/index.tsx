import { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { SaveModal } from "../../components/saveModal";
import { Wrapper, TextArea, Preview, ButtonGroup } from "./styled";
import { putMemo } from "../../libs/memoDatabase";
import { useEditorContext } from "../../contexts/EditorProvider";
import "github-markdown-css";
import { LinkButton } from "../../components/linkButton";

export const Editor: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [html, setHtml] = useState<string>("");

  const { text, setText } = useEditorContext();

  useEffect(() => {
    const htmlContent = marked(text) as string;
    setHtml(htmlContent);
  }, [text]);

  return (
    <>
      <Header title="Knowledge Box <beta版>" titleTag="h1">
        <ButtonGroup>
          <Button onClick={() => setShowModal(true)}>SAVE</Button>
          <LinkButton>
            <Link to="/note-list">SEE ALL</Link>
          </LinkButton>
        </ButtonGroup>
      </Header>
      <Wrapper>
        <TextArea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Preview className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Preview>
      </Wrapper>
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};
