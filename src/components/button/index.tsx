import { FunctionComponent } from "react";
import { StyledButton } from "./styled";

interface Props {
  cancel?: boolean;
  children: string;
  onClick: () => void;
}

export const Button: FunctionComponent<Props> = ({
  cancel,
  children,
  onClick,
}) => (
  <StyledButton onClick={onClick} className={cancel ? "cancel" : ""}>
    {children}
  </StyledButton>
);
