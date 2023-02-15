import Image from 'next/image';

export default function Thankyou() {
  return (
    <main className="paper container">
      <h2>Thank you for shopping at Scoop!</h2>
      <Image
        src="/images/homepage.jpg"
        alt="icecream"
        width="900"
        height="600"
      />
    </main>
  );
}
