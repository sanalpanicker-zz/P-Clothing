import React, { Component } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../component/preview-collection/preview-collection.component';


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }


  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ ...collection }) => {
          return <CollectionPreview {...collection} />;
        })}
      </div>
    );
  }
}


export default Shop;
