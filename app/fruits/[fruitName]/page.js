import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../../database/products';
import Fruit from './products';

// export const fruits = [
//   { id: 1, name: 'Banana', icon: '🍌' },
//   { id: 2, name: 'Coconuts', icon: '🥥' },
//   { id: 3, name: 'Papaya', icon: '🥔' },
//   { id: 4, name: 'Mango', icon: '🥭' },
//   { id: 5, name: 'Avocado', icon: '🥑' },
// ];

// we add this only if we have no dynamic function as cookies or headers
export const dynamic = 'force-dynamic';

export default function FruitPage({ params }) {
  const singleFruit = products.find((fruit) => {
    return fruit.name.toLowerCase() === params.fruitName;
  });

  return (
    <>
      <h1>{singleFruit.name}</h1>
      <br />
      {/*this is the input field for quantity*/}
      <span>Quantity (insert number):</span>{' '}
      <input
        htmlFor="data-test-id=`product-quantity`"
        id="quantity"
        name="quantity"
        placeholder="1"
        required
      />
      <br />
      {/*this is the price*/}
      <div htmlFor="data-test-id=`product-price`">{singleFruit.price},- €</div>
      {/*this is the add to cart button*/}
      <Fruit fruit={singleFruit} />
      <Image
        htmlFor="data-test-id=`product-image`"
        src={`/images/${singleFruit.name}-${singleFruit.id}.jpg`}
        alt={singleFruit.name}
        width="300"
        height="458"
      />
    </>
  );
}
