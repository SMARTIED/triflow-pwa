import Link from "next/link";

/* PRODUCTS */
const products = [
  {
    id: 1,
    description: "Copper Pipe",
    diameter: "20mm",
    length: "1m",
    price: 120,
    image: "/images/products/copper-pipe-20mm.jpg",
  },
  {
    id: 2,
    description: "PVC Pipe",
    diameter: "25mm",
    length: "1m",
    price: 45,
    image: "/images/products/pvc-pipe-25mm.jpg",
  },
  {
    id: 3,
    description: "Ball Valve",
    diameter: '½"',
    length: "-",
    price: 89,
    image: "/images/products/ball-valve-half-inch.jpg",
  },
];

export default function ShopPage() {
  return (
    <div className="page shop-page">
      <h1>TriFlow Plumbing Store</h1>
      <p>Professional plumbing supplies</p>

      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-row">
            <img src={item.image} alt={item.description} />

            <div className="product-info">
              <strong>{item.description}</strong>
              <span>
                {item.diameter} • {item.length}
              </span>
            </div>

            <div className="product-actions">
              <div className="product-price">R{item.price}</div>
              <Link href="/register" className="buy-btn">
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
