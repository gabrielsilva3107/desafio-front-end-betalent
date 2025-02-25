import React from "react";
import { TableContainer, StyledTable, TableHeader, TableRow, ProfileImage } from "./styles";
import { formatPhone } from "../../utils";

export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

type DesktopTableProps = {
  employees: Employee[];
};

const DesktopTable: React.FC<DesktopTableProps> = ({ employees }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </TableHeader>
        <tbody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <td>
                <ProfileImage src={emp.image} alt={emp.name} />
              </td>
              <td>{emp.name}</td>
              <td>{emp.job}</td>
              <td>{new Date(emp.admission_date).toLocaleDateString("pt-BR")}</td>
              <td>{formatPhone(emp.phone)}</td>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default DesktopTable;
