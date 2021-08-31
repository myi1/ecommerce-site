import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionTitle,
  PreviewContainer,
} from "./CollectionPreview.styles";

export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <PreviewContainer>
        {items
          .filter((_item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
