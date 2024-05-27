// src/components/Kosarica.tsx

import React, { useEffect, useState } from 'react';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
}

const Kosarica: React.FC = () => {
  const [cart, setCart] = useState<Izdelek[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(izdelek => izdelek.id !== id);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalCena = cart.reduce((total, izdelek) => total + izdelek.cena, 0);

  return (
    <div className="kosarica-container">
      <h1>Košarica</h1>
      {cart.length === 0 ? (
        <p>Vaša košarica je prazna.</p>
      ) : (
        <ul>
          {cart.map((izdelek, index) => (
            <li key={index}>
              <h2>{izdelek.naziv}</h2>
              <p>Cena: {izdelek.cena} EUR</p>
              <p>Opis: {izdelek.opis}</p>
              <button onClick={() => removeFromCart(izdelek.id)}>Odstrani</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Skupna cena: {totalCena} EUR</h2>
    </div>
  );
};

export default Kosarica;
