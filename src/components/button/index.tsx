import { FunctionComponent } from "react";
import { StyledButton } from "./styled";

interface Props {
  cancel?: boolean;
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
