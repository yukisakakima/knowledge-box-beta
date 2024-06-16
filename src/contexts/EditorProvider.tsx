import {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface EditorContextType {
  text: string;
  setText: (text: string) => void;
  referenceURL: string;
  setReferenceURL: (referenceURL: string) => void;
}

const EditorContext = createContext<EditorContextType>({
  text: "",
  setText: () => {},
  referenceURL: "",
  setReferenceURL: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const EditorProvider: FunctionComponent<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [text, setText] = useState("");
  const [referenceURL, setReferenceURL] = useState<string>("");
  return (
    <EditorContext.Provider
      value={{ text, setText, referenceURL, setReferenceURL }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  return useContext(EditorContext);
};
