import { useState, useEffect, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";

import {
  Wrapper,
  Memo,
  MemoTitle,
  MemoText,
  Paging,
  PagingButton,
} from "./styled";

import {
  getMemos,
  getMemoPageCount,
  MemoRecord,
  deleteMemo,
} from "../../libs/memoDatabase";
import { Button } from "../../components/button";
import { useEditorContext } from "../../../contexts/EditorProvider";

export const NoteList: FunctionComponent = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const navigate = useNavigate();

  const { setText } = useEditorContext();

  useEffect(() => {
    getMemos(1).then(setMemos);
    getMemoPageCount().then(setMaxPage);
  }, []);

  const canNextPage: boolean = page < maxPage;
  const canPrevPage: boolean = page > 1;
  const movePage = (targetPage: number) => {
    if (targetPage < 1 || maxPage < targetPage) {
      return;
    }
    setPage(targetPage);
    getMemos(targetPage).then(setMemos);
  };

  const handleDelete = async (datetime: string) => {
    await deleteMemo(datetime);
    const updatedMemos = await getMemos(page);
    setMemos(updatedMemos);
    const updatedMaxPage = await getMemoPageCount();
    setMaxPage(updatedMaxPage);
  };

  return (
    <>
      <Header title="Note List" titleTag="h2">
        <Button onClick={() => navigate("/")}>Back</Button>
      </Header>
      <Wrapper>
        {memos.map((memo) => (
          <Memo key={memo.datetime}>
            <div
              onClick={() => {
                setText(memo.text);
                navigate("/");
              }}
            >
              <MemoTitle>{memo.title}</MemoTitle>
              <MemoText>{memo.text}</MemoText>
            </div>
            <Button onClick={() => handleDelete(memo.datetime)}>Delete</Button>
          </Memo>
        ))}
      </Wrapper>
      <Paging>
        <PagingButton
          onClick={() => movePage(page - 1)}
          disabled={!canPrevPage}
        >
          ＜
        </PagingButton>
        {page} / {maxPage}
        <PagingButton
          onClick={() => movePage(page + 1)}
          disabled={!canNextPage}
        >
          ＞
        </PagingButton>
      </Paging>
    </>
  );
};
