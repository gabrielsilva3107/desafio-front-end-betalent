import React from "react";
import { GlobalStyle } from "./styles";
import Header from "./components/header";
import Section from "./components/section";
import { SearchProvider } from "./SearchContext";
import ResponsiveTable from "./components/ResponsiveTable";

const App: React.FC = () => {
  return (
    <SearchProvider>
      <GlobalStyle />
      <Header />
      <Section />
      <ResponsiveTable />
    </SearchProvider>
  );
};

export default App;
