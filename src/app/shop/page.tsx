'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsCollection = collection(db, 'products');
      const snapshot = await getDocs(productsCollection);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Shop Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(p => (
          <div key={p.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
            <h2>{p.name}</h2>
            <p>R{p.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
