import Link from "next/link";

/* ✅ PRODUCTS MUST BE HERE */
const products = [
  {
    id: 1,
    description: "Copper Pipe",
    diameter: "20mm",
    length: "1m",
    price: 120,
    image: "/images/copper-pipe.jpg",
  },
  {
    id: 2,
    description: "PVC Pipe",
    diameter: "25mm",
    length: "1m",
    price: 45,
    image: "/images/pvc-pipe.jpg",
  },
];

/* ✅ COMPONENT BELOW */
export default function ShopPage() {
  return (
    <div className="page shop-page">
      <h1>TriFlow Plumbing Store</h1>
      <p>Professional plumbing supplies</p>

      <div className="product-grid header">
        <span>Image</span>
        <span>Description</span>
        <span>Diameter</span>
        <span>Length</span>
        <span>Price</span>
        <span></span>
      </div>

      {products.map((item) => (
        <div key={item.id} className="product-grid">
          <img src={item.image} alt={item.description} />
          <span>{item.description}</span>
          <span>{item.diameter}</span>
          <span>{item.length}</span>
          <strong>R{item.price}</strong>

          <Link href="/register" className="buy">
            Buy
          </Link>
        </div>
      ))}
    </div>
  );
}
