import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Products = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProducts(res.data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ${p.price} <br />
            {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
