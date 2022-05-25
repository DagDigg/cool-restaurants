import { Hits as AlgoliaHits, HitsProps } from "react-instantsearch-hooks-web";
import { Restaurant } from "../../types";
import { HitsContainer } from "./elements";

export function Hits(props: HitsProps<Restaurant>) {
  return (
    <HitsContainer>
      <AlgoliaHits {...props} />
    </HitsContainer>
  );
}
