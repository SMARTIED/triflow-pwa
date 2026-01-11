import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="page shop-page">
      <h1>TriFlow Plumbing Store</h1>
      <p>Professional plumbing supplies</p>

      {/* Column Headers */}
      <div className="product-grid header">
        <span>Image</span>
        <span>Description</span>
        <span>Diameter</span>
        <span>Length</span>
        <span>Price</span>
        <span>Action</span>
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
