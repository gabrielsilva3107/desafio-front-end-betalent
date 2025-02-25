import styled from "styled-components";
import { colors, fonts } from "../../styles";

export const MobileHeaderBar = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    background-color: ${colors.primary};
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    font-family: ${fonts.primary};
    border-radius: 8px 8px 0 0;
    padding: 12px 16px;

    span {
      margin-right: 24px;
    }

    .circle-icon {
      margin-left: auto;
      width: 16px;
      height: 16px;
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  font-family: ${fonts.primary};
  font-size: 16px;

  border: 1px solid ${colors.gray10};
  border-radius: 0;
  margin-bottom: 0;
  padding: 12px 16px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  .user-name {
    margin-left: 12px;
    font-weight: 500;
    color: #333;
  }
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ExpandIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

export const ExpandedInfo = styled.div`
  background-color: #fff;
  font-family: ${fonts.primary};
  border-bottom: 1px solid ${colors.gray10};
  border-top: none;
  border-radius: 0;
  padding: 12px 16px;
  display: block;

  p {
    display: flex;
    margin: 8px 0;
    justify-content: space-between;
    border-bottom: 1px dashed ${colors.gray10};
  }

  strong {
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  margin: 0 32px;
`;
