import Link from "next/link";

const products = [
  { id: 1, name: "Copper Pipe 1m", price: 120 },
  { id: 2, name: "PVC Pipe 1m", price: 45 },
  { id: 3, name: "Ball Valve ½\"", price: 89 },
  { id: 4, name: "Mixer Tap", price: 650 },
];

export default function ShopPage() {
  return (
    <div className="page">
      <h1>TriFlow Plumbing Store</h1>
      <p>Professional plumbing supplies</p>

      {products.map((item) => (
        <div key={item.id} className="product">
          <span>
            {item.name} — <strong>R{item.price}</strong>
          </span>

          <Link href="/register" className="buy">
            Buy
          </Link>
        </div>
      ))}
    </div>
  );
}
