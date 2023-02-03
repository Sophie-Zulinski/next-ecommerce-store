import { products } from '../../database/products';
import Productamount from './head';

// the folder has to be changed to productamount..js

export default function Cart(params) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productName;
  });
  return (
    <>
      <h1>Cart</h1>

      <div>here will be the cart</div>
      <Productamount amount={singleProduct.amount} />
    </>
  );
}
