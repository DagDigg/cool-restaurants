import React from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { Content } from "./components/Content";
import { Heading } from "./components/Heading";
import { Hit } from "./components/Hit";
import { Hits } from "./components/Hits";
import { Pagination } from "./components/Pagination";
import { RefinementList } from "./components/RefinementList";
import { SearchBox } from "./components/SearchBox";
import { searchClient } from "./lib/algolia";

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="interview_candidate">
      <Heading>
        <SearchBox />
      </Heading>
      <Content>
        <RefinementList attribute="food_type" showMore={true} />
        <Hits hitComponent={Hit} />
      </Content>
      <Pagination />
    </InstantSearch>
  );
}

export default App;
