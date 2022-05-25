import styled from "styled-components";

export const HitsContainer = styled.div`
  width: 100%;
  .ais-Hits-list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 18px;
    padding: 18px;
    grid-auto-rows: 1fr;
  }
`;
