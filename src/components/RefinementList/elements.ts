import { RefinementList } from "react-instantsearch-hooks-web";
import styled from "styled-components";
import { colors } from "../../theme";

export const StyledRefinementList = styled(RefinementList)`
  padding: 24px;
  min-width: 128px;

  .ais-RefinementList-item {
    margin: 6px 0;
  }
  .ais-RefinementList-count {
    margin-left: 8px;
    padding: 4px 8px;
    background-color: ${colors.light.green3};
    border-radius: 100px;
    font-size: 11px;
    font-weight: bold;
  }
  .ais-RefinementList-list {
    list-style: none;
    padding: 0;
  }
  .ais-RefinementList-showMore {
    background-color: transparent;
    color: ${colors.light.green1};
    border: 1px solid ${colors.light.green2};
    padding: 6px 14px;
    border-radius: 4px;
    cursor: pointer;
  }
` as typeof RefinementList;
