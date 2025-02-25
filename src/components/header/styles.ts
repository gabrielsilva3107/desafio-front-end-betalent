import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 767px) {
    height: 30px;
  }
`;
