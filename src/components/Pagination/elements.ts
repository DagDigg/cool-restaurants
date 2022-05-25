import { Pagination } from "react-instantsearch-hooks-web";
import styled from "styled-components";
import { colors } from "../../theme";

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  .ais-Pagination-list {
    list-style: none;
    display: flex;
    gap: 8px;
    cursor: pointer;
    & > li {
      min-width: 24px;
      min-height: 24px;
      padding: 6px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.light.green3};
    }
  }

  .ais-Pagination-item--disabled {
    opacity: 0.4;
  }
  .ais-Pagination-link {
    color: inherit;
    text-decoration: none;
  }
` as typeof Pagination;
