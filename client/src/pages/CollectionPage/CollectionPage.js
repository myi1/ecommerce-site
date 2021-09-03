import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import {
  CollectionPageContainer,
  ItemsContainer,
} from "./CollectionPage.styles";
import { CollectionTitle } from "../../Components/CollectionPreview/CollectionPreview.styles";

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
}

export default CollectionPage;
