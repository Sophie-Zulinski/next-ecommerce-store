import Image from 'next/image';

export default function Thankyou() {
  return (
    <main>
      <h1>Thank you for shopping at Scoop!</h1>
      <Image
        src="/images/homepage.jpg"
        alt="icecream"
        width="900"
        height="600"
      />
    </main>
  );
}
