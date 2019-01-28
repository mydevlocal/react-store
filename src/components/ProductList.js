import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Title from './Title';
import { ProductConsumer } from '../context';

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {val => {
                  return val.products.map(product => {
                    return <ProductItem product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
