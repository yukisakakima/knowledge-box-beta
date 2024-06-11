import { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const LinkButton: FunctionComponent<Props> = ({ children }) => {
  return <button>{children}</button>;
};
