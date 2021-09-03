import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionTitle,
  PreviewContainer,
} from "./CollectionPreview.styles";

function CollectionPreview({ title, items, history, match, routeName }) {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </CollectionTitle>
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

export default withRouter(CollectionPreview);
