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
        <span>Quantity (insert number):</span>{' '}
        <input
          htmlFor="data-test-id=`product-quantity`"
          id="quantity"
          name="quantity"
          placeholder="1"
          required
        />
        <div htmlFor="data-test-id=`product-price`">
          {singleProduct.price},- €
        </div>
        <ProductsCookie fruit={singleProduct} />
        <br />
        <Image
          htmlFor="data-test-id=`product-image`"
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
          alt={singleProduct.name}
          width="300"
          height="458"
        />
        <Productamount amount={singleProduct.amount} />
      </main>
    </>
  );
}
