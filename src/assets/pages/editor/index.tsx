import { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";

import { Header } from "../../../components/header";
import { Button } from "../../../components/button";
import { SaveModal } from "../../../components/saveModal";
import {
  Wrapper,
  TextArea,
  Preview,
  ButtonGroup,
  URLForm,
  URLInput,
  LinkPreview,
} from "./styled";
import { putMemo } from "../../libs/memoDatabase";
import { useEditorContext } from "../../../contexts/EditorProvider";
import "github-markdown-css";

export const Editor: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [html, setHtml] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [linkTitle, setLinkTitle] = useState<string>("");

  const { text, setText } = useEditorContext();

  useEffect(() => {
    const htmlContent = marked(text) as string;
    setHtml(htmlContent);
  }, [text]);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const fetchLinkTitle = async (url: string) => {
    try {
      const response = await fetch(url);
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const title =
        doc.querySelector("title")?.innerText ||
        "リンクタイトルを取得できませんでした";
      setLinkTitle(title);
    } catch (error) {
      console.error("Error fetching link title:", error);
      setLinkTitle("リンクタイトルを取得できませんでした");
    }
  };

  useEffect(() => {
    if (url) {
      try {
        new URL(url);
        fetchLinkTitle(url);
      } catch (error) {
        console.error("Invalid URL:", error);
        setLinkTitle("無効なURLです");
      }
    }
  }, [url]);

  return (
    <>
      <Header title="Knowledge Box <beta版>" titleTag="h1">
        <ButtonGroup>
          <Button onClick={() => setShowModal(true)}>SAVE</Button>
          <Link to="/note-list">SEE ALL</Link>
        </ButtonGroup>
      </Header>
      <Wrapper>
        <TextArea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Preview className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <LinkPreview>
            {linkTitle && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {linkTitle}
              </a>
            )}
          </LinkPreview>
        </Preview>
      </Wrapper>
      <URLForm>
        <label>URLを入力:</label>
        <URLInput
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://example.com"
        />
      </URLForm>
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
