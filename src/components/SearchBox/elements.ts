import { SearchBox } from "react-instantsearch-hooks-web";
import styled from "styled-components";
import { colors } from "../../theme";

export const StyledSearchBox = styled(SearchBox)`
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  .ais-SearchBox-form {
    display: flex;
  }
  .ais-SearchBox-input {
    appearance: none;
    display: flex;
    height: 38px;
    width: 248px;
    margin: 0 18px;
    padding: 0 12px;
    background-color: ${colors.light.lowContrast};
    appearence: none;
    border: 2px solid transparent;
    border-radius: 4px;
    &:active,
    &:focus {
      border: 2px solid ${colors.light.green1};
      outline: none;
    }
    font-size: 22px;
    color: ${colors.light.green1};
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    margin: 0 8px;
    width: 38px;
    height: 38px;
    box-sizing: border-box;
    background-color: ${colors.light.lowContrast};
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }

  .ais-SearchBox-submitIcon {
    width: 14px;
    height: 14px;
  }
`;
