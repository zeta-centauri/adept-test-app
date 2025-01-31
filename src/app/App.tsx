import styled from "styled-components";
import CompaniesView from "../features/companies/ui/CompaniesView";

function App() {
  return (
    <Container>
      <CompaniesView />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export default App;
