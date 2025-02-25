import React from "react";
import { SectionContainer, Title, SearchInput } from "./styles";
import { useSearch } from "../../SearchContext";

const Section: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <SectionContainer>
      <Title>Funcionários</Title>
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SectionContainer>
  );
};

export default Section;
