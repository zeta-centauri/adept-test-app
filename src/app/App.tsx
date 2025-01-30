import styled from "styled-components";
import CompaniesTable from "../features/companies/ui/CompaniesTable";

function App() {
  return (
    <Container>
      <CompaniesTable />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;
export default App;
