import { PropsWithChildren } from "react";

interface Props {
  isSelectAll: boolean;
  handleSelectAll: () => void;
}
const TableWrapper = ({
  isSelectAll,
  handleSelectAll,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <table>
      <thead>
        <tr>
          <input
            type="checkbox"
            checked={isSelectAll}
            onChange={handleSelectAll}
          />
          <th>Название компании</th>
          <th>Адрес</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableWrapper;
