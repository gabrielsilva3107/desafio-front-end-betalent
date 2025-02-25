import React, { useState } from "react";
import {
  MobileHeaderBar,
  RowContainer,
  UserInfo,
  ProfileImage,
  ExpandIcon,
  ExpandedInfo,
  MobileContainer
} from "./styles";

import UpIcon from "../../assets/icons/charm_chevron-up.png";
import DownIcon from "../../assets/icons/charm_chevron-down.png";
import CircleIcon from "../../assets/icons/Circle.png";
import { formatPhone } from "../../utils";

export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

type MobileCardsProps = {
  employees: Employee[];
};

const MobileCards: React.FC<MobileCardsProps> = ({ employees }) => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <MobileContainer>
      <MobileHeaderBar>
        <span>FOTO</span>
        <span>NOME</span>
        <img src={CircleIcon} alt="Ícone" className="circle-icon" />
      </MobileHeaderBar>

      {employees.map((emp) => {
        const isExpanded = expandedIds.includes(emp.id);
        return (
          <React.Fragment key={emp.id}>
            <RowContainer>
              <UserInfo>
                <ProfileImage src={emp.image} alt={emp.name} />
                <span className="user-name">{emp.name}</span>
              </UserInfo>

              <ExpandIcon onClick={() => toggleExpand(emp.id)}>
                <img
                  src={isExpanded ? UpIcon : DownIcon}
                  alt="Seta de expandir"
                />
              </ExpandIcon>
            </RowContainer>

            {isExpanded && (
              <ExpandedInfo>
                <p>
                  <strong>Cargo:</strong> <span>{emp.job}</span>
                </p>
                <p>
                  <strong>Data de admissão:</strong>{" "}
                  <span>
                  {new Date(emp.admission_date).toLocaleDateString("pt-BR")}
                  </span>
                </p>
                <p>
                  <strong>Telefone:</strong><span>{formatPhone(emp.phone)}</span>
                </p>
              </ExpandedInfo>
            )}
          </React.Fragment>
        );
      })}
    </MobileContainer>
  );
};

export default MobileCards;
