import styled from "styled-components";
import CompaniesTable from "../features/companies/ui/CompaniesTable";
import CompaniesPanel from "../features/companies/ui/CompaniesPanel";

function App() {
  return (
    <Container>
      <CompaniesTable />
      <CompaniesPanel />
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
