import styled from "styled-components";
import lupa from '../../assets/icons/Vector.png'
import { colors } from "../../styles";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 100px;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 20px;

    h1 {
      font-size: 20px;
      }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;

  @media (max-width: 767px) {
    height: 24px;
    margin: 24px 0;
  }
`;

export const SearchInput = styled.input`
  width: 287px;
  height: 48px;
  padding: 12px 40px 12px 16px;
  border: 1px solid ${colors.gray10};
  background-color: red;
  border-radius: 8px;
  font-size: 16px;

  background: url(${lupa}) no-repeat right 12px center;
  background-size: 20px;
  background-color: white;

  &::placeholder {
    color: #${colors.gray20};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
