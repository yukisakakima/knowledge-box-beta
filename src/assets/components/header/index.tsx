import { FunctionComponent, ReactNode } from "react";
import { HeaderTitle, HeaderLeft, HeaderRight, HeaderWrapper } from "./styled";

interface Props {
  title?: string;
  titleTag?: "h1" | "h2";
  children?: ReactNode;
}
export const Header: FunctionComponent<Props> = (props) => (
  <HeaderWrapper>
    <HeaderLeft>
      <HeaderTitle as={props.titleTag}>{props.title}</HeaderTitle>
    </HeaderLeft>
    <HeaderRight>{props.children}</HeaderRight>
  </HeaderWrapper>
);
