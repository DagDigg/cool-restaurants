import styled, { css } from "styled-components";
import { colors } from "../../theme";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPinMap } from "react-icons/bs";

export const DeleteIcon = styled(FaRegTrashAlt)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${colors.light.red};
  cursor: pointer;
  opacity: 0;
  transition: 0.15s opacity ease-in-out;
`;

export const Article = styled.article<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}

  border: 1px solid ${colors.light.green3};
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .ais-Highlight-highlighted {
    background-color: ${colors.light.yellow};
    color: ${colors.light.green1};
  }

  &:hover {
    ${DeleteIcon} {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 24px 18px 18px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h3`
  margin: 0;
  &,
  span {
    color: ${colors.light.green1};
  }
`;

export const Top = styled.div`
  height: 294px;
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PinMapIcon = styled(BsPinMap)`
  margin-right: 12px;
`;
