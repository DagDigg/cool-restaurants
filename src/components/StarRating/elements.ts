import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from "styled-components";
import { colors } from "../../theme";

export const StarFill = styled(BsStarFill)`
  color: ${colors.light.yellow};
`;

export const StarHalf = styled(BsStarHalf)`
  color: ${colors.light.yellow};
`;

export const StarEmpty = styled(BsStar)`
  color: ${colors.light.yellow};
`;
