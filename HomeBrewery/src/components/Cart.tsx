// src/components/Cart.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface CartItem {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  ime_kategorije: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    axios.get('https://home-brewery-server.vercel.app/api/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov iz košarice:', error);
      });
  }, []);

  return (
    <div className="cart-container">
      <h1>Košarica</h1>
      {cartItems.length === 0 ? (
        <p>Košarica je prazna.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <h2>{item.naziv}</h2>
              <p>Cena: {item.cena} EUR</p>
              <p>Opis: {item.opis}</p>
              <p>Kategorija: {item.ime_kategorije}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
