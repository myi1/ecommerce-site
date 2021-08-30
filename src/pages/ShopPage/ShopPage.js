import React, { Component } from "react";
import SHOP_DATA from "../../data/SHOP_DATA";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
