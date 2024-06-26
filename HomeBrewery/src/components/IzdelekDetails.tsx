// src/components/IzdelekDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/details.css';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  zaloga: number;
  ime_kategorije: string;
  kategorija_id: number | null;
  slika: string | null;
}

const IzdelekDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [izdelek, setIzdelek] = useState<Izdelek | null>(null);

  useEffect(() => {
    axios.get(`https://home-brewery-server.vercel.app/api/izdelki/${id}`)
      .then(response => {
        setIzdelek(response.data);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov:', error);
      });
  }, [id]);

  if (!izdelek) {
    return <div>Nalaganje...</div>;
  }

  const addToCart = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.push(izdelek);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="izdelek-details">
      <div className='izdelek-card'>
        <h1>{izdelek.naziv}</h1>
        {izdelek.slika && <img src={izdelek.slika} alt={izdelek.naziv} />} {/* Posodobljeno: pravilna sestava URL-ja */}
        <p>Cena: {izdelek.cena} EUR</p>
        <p>Opis: {izdelek.opis}</p>
        <p>Zaloga: {izdelek.zaloga}</p>
        <button onClick={addToCart}>
          Dodaj v košarico
        </button>
      </div>
    </div>
  );
};

export default IzdelekDetails;
