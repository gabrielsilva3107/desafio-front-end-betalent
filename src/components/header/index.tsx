import React from "react";
import { HeaderContainer, Logo } from "./styles";
import logo from "../../assets/logo/Logo.png"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="BeTalent" />
    </HeaderContainer>
  );
};

export default Header;
