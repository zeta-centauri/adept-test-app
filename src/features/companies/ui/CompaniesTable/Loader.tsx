import styled from "styled-components";

const Loader = () => {
  return <Wrapper>Загрузка...</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

export default Loader;
