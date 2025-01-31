import styled from "styled-components";
import { useAppDispatch } from "../../../app/store";
import { addCompany, removeSelected } from "../model/companiesSlice";
import Button from "../../../common/components/Button";

const CompaniesPanel = () => {
  const dispatch = useAppDispatch();

  const handleAddCompany = () => {
    dispatch(addCompany({ name: "", adress: "" }));
  };

  const handleRemoveCompany = () => {
    dispatch(removeSelected());
  };
  return (
    <Wrapper>
      <Button color="#6382b5" onClick={handleAddCompany}>
        Добавить
      </Button>
      <Button color="#cd4e4e" onClick={handleRemoveCompany}>
        Удалить
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default CompaniesPanel;
