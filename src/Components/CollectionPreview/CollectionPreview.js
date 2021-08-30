import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='collection-preview__title'>{title.toUpperCase()}</h1>
      <div className='collection-preview__preview'>
        {items
          .filter((_item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
