// src/components/IzdelekDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import '../css/izdelekDetails.css';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  ime_kategorije: string;
  kategorija_id: number | null;
}

const IzdelekDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [izdelek, setIzdelek] = useState<Izdelek | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/izdelki/${id}`)
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

  return (
    <div className="izdelek-details">
      <h1>{izdelek.naziv}</h1>
      <p>Cena: {izdelek.cena} EUR</p>
      <p>Opis: {izdelek.opis}</p>
      <p>Kategorija: {izdelek.ime_kategorije}</p>
      <button onClick={() => {
        const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(izdelek);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`Izdelek "${izdelek.naziv}" je bil dodan v košarico.`);
      }}>
        Dodaj v košarico
      </button>
    </div>
  );
};

export default IzdelekDetails;
