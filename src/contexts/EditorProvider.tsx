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
}

const EditorContext = createContext<EditorContextType>({
  text: "",
  setText: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const EditorProvider: FunctionComponent<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [text, setText] = useState("");
  return (
    <EditorContext.Provider value={{ text, setText }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  return useContext(EditorContext);
};
