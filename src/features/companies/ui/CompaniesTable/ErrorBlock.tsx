import styled from "styled-components";

interface Props {
  errorMessage: string;
}

const ErrorBlock = ({ errorMessage }: Props) => {
  return <Wrapper>{errorMessage}</Wrapper>;
};

export default ErrorBlock;

const Wrapper = styled.div`
  width: 100%;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
