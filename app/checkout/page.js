import { totalAmount, totalPrice } from '../cart/page';
import styles from '../page.module.scss';

export default function Checkout() {
  const totalPricePerPlant = function calculateprice(price, amount) {
    return price * amount;
  };

  return (
    <>
      <h1>Checkout</h1>
      <div> Please fill out all fields*</div>
      <main className={styles.main}>
        <form>
          <input
            htmlFor="data-test-id=`checkout-first-name`"
            id="firstName"
            name="firstName"
            placeholder="first name"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-last-name`"
            id="lastName"
            name="lastName"
            placeholder="last name"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-email`"
            id="email"
            name="email"
            placeholder="e-mail"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-address`"
            id="address"
            name="address"
            placeholder="adress"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-city`"
            id="city"
            name="city"
            placeholder="city"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`postal code`"
            id="postal code"
            name="postal code"
            placeholder="postal code"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`country`"
            id="country"
            name="country"
            placeholder="country"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`credit-card`"
            id="credit-card"
            name="credit-card"
            placeholder="credit-card"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-expiration-date`"
            id="expiration-date"
            name="expiration-date"
            placeholder="expiration-date"
            required
          />
          <br />
          <input
            htmlFor="data-test-id=`checkout-security-code`"
            id="security-code"
            name="security-code"
            placeholder="security-code"
            required
          />
          <br />
          <button htmlFor="data-test-id=`checkout-confirm-order`">
            Buy the plant
          </button>
        </form>
      </main>
    </>
  );
}
