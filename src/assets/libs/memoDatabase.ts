import Dexie from "dexie";

export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}

const db = new Dexie("memoDatabase");
db.version(1).stores({
  memos: "&datetime",
});

const memos = db.table<MemoRecord>("memos");

export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString();
  await memos.put({ datetime, title, text });
};

export const getMemos = async (page: number): Promise<MemoRecord[]> => {
  const PAGE_SIZE = 10;
  const offset = (page - 1) * PAGE_SIZE;
  return memos
    .orderBy("datetime")
    .reverse()
    .offset(offset)
    .limit(PAGE_SIZE)
    .toArray();
};

export const getMemoPageCount = async (): Promise<number> => {
  const PAGE_SIZE = 10;
  const totalMemos = await memos.count();
  return Math.ceil(totalMemos / PAGE_SIZE);
};

export const deleteMemo = async (datetime: string): Promise<void> => {
  await memos.delete(datetime);
};
