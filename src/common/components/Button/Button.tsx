import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  color?: string;
  onClick?: () => void;
}

const Button = ({ color, onClick, children }: PropsWithChildren<Props>) => {
  return (
    <StyledButton onClick={onClick} $color={color ?? ""}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $color: string }>`
  width: 100%;
  padding: 0.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  background-color: ${({ $color }) => $color};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.1s;

  &:hover {
    opacity: 0.9;
  }
`;
export default Button;
