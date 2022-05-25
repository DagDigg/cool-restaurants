import { useState } from "react";
import { Highlight } from "react-instantsearch-hooks-web";
import { index } from "../../lib/algolia";
import { RestaurantHit } from "../../types";
import { StarRating } from "../StarRating";
import {
  Article,
  Content,
  DeleteIcon,
  FlexContainer,
  Footer,
  Header,
  Img,
  PinMapIcon,
  Title,
  Top,
} from "./elements";

export function Hit({ hit }: { hit: RestaurantHit }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteRestaurant = async () => {
    setIsDeleting(true);
    const { taskID } = await index.deleteObject(hit.objectID);
    await index.waitTask(taskID);
    window.location.reload();
  };
  return (
    <Article disabled={isDeleting}>
      <Top>
        <Img src={hit.image_url} alt={hit.name} />
        <DeleteIcon onClick={deleteRestaurant} />
      </Top>
      <Content>
        <Header>
          <Title>
            <Highlight attribute="name" hit={hit} />
          </Title>
        </Header>

        <FlexContainer>
          <PinMapIcon />
          <p>
            {hit.city}, {hit.state}
          </p>
        </FlexContainer>
        <Footer>
          <p>{"$".repeat(hit.price)}</p>
          <StarRating count={hit.stars_count} />
        </Footer>
      </Content>
    </Article>
  );
}
