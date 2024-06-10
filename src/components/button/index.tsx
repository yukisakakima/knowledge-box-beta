import { FunctionComponent } from "react";
import { StyledButton } from "./styled";

interface Props {
  cancel?: boolean;
  children: string;
  onClick: () => void;
}

export const Button: FunctionComponent<Props> = (props) => (
  <StyledButton
    onClick={props.onClick}
    className={props.cancel ? "cancel" : ""}
  >
    {props.children}
  </StyledButton>
);
