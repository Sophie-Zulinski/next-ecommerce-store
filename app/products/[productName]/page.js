import Image from 'next/image';
import { getProducts } from '../../../database/products';
import ProductsCookie from './cookiebutton';
import styles from './page.module.scss';

// export const products = [
//   { id: 1, name: 'Gumtree', price: '5' },
//  { id: 2, name: 'Lilac', price: '10' },
// { id: 3, name: 'Succulents', price: '20' },
// { id: 4, name: 'Poppy', price: '50' },
//

export default async function Products({ params }) {
  const products = await getProducts();
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productName;
  });

  return (
    <main className={styles.main}>
      <h1>{singleProduct.name}</h1>

      <input
        htmlFor="data-test-id=`product-quantity`"
        id="quantity"
        name="quantity"
        placeholder="Insert Quantity"
        required
      />
      <div htmlFor="data-test-id=`product-price`">
        Price: {singleProduct.price},- €
      </div>
      <br />
      <Image
        htmlFor="data-test-id=`product-image`"
        src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
        alt={singleProduct.name}
        width="300"
        height="300"
      />
      <ProductsCookie product={singleProduct} />
      {console.log('singleproduct', products)}
    </main>
  );
}
