import { FunctionComponent, ReactNode } from "react";
import { HeaderTitle, HeaderLeft, HeaderRight, HeaderWrapper } from "./styled";

interface Props {
  title?: string;
  titleTag?: "h1" | "h2";
  children?: ReactNode;
}
export const Header: FunctionComponent<Props> = ({
  title,
  titleTag,
  children,
}) => (
  <HeaderWrapper>
    <HeaderLeft>
      <HeaderTitle as={titleTag}>{title}</HeaderTitle>
    </HeaderLeft>
    <HeaderRight>{children}</HeaderRight>
  </HeaderWrapper>
);
