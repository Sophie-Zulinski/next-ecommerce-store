import Image from 'next/image';
import { products } from '../../database/products';
import Productamount from './productamount.';
import ProductsCookie from './products';

// export const products = [
//   { id: 1, name: 'Gumtree', price: '5' },
//  { id: 2, name: 'Lilac', price: '10' },
// { id: 3, name: 'Succulents', price: '20' },
// { id: 4, name: 'Poppy', price: '50' },
//

export default function Products({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productName;
  });

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        <span>Quantity:</span>{' '}
        <span htmlFor="data-test-id=`product-quantity`"> 1</span>
        <div htmlFor="data-test-id=`product-price`">
          {singleProduct.price},- €
        </div>
        <button htmlFor="data-test-id=`product-add-to-cart`">
          Add to cart
        </button>
        <br />
        <Image
          htmlFor="data-test-id=`product-image`"
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
          alt={singleProduct.name}
          width="300"
          height="458"
        />
        <ProductsCookie fruit={singleProduct} />
        <Productamount amount={singleProduct.amount} />
      </main>
    </>
  );
}
