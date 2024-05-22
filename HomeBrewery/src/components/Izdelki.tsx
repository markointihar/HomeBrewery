// src/components/Izdelki.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/izdelki.css';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  kategorija_id: number | null;
}

interface Kategorija {
  id: number;
  naziv: string;
}

const Izdelki: React.FC = () => {
  const [izdelki, setIzdelki] = useState<Izdelek[]>([]);
  const [kategorije, setKategorije] = useState<Kategorija[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/izdelki')
      .then(response => {
        setIzdelki(response.data.izdelki);
        setKategorije(response.data.kategorije);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov:', error);
      });
  }, []);

  const handleCategoryChange = (id: number) => {
    setSelectedCategories(prevSelected => 
      prevSelected.includes(id) 
        ? prevSelected.filter(categoryId => categoryId !== id)
        : [...prevSelected, id]
    );
  };

  const filteredIzdelki = izdelki.filter(izdelek => 
    selectedCategories.length === 0 || 
    (izdelek.kategorija_id !== null && selectedCategories.includes(izdelek.kategorija_id))
  );

  return (
    <div className="izdelki-container">
      <div className="sidebar">
        <h2>Kategorije</h2>
        <ul>
          {kategorije.map(kategorija => (
            <li key={kategorija.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes(kategorija.id)} 
                  onChange={() => handleCategoryChange(kategorija.id)} 
                />
                {kategorija.ime}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="izdelki-content">
        <h1>Seznam izdelkov</h1>
        <ul>
          {filteredIzdelki.map(izdelek => (
            <li key={izdelek.id} className="izdelek">
              <h2>{izdelek.naziv}</h2>
              <p>Cena: {izdelek.cena} EUR</p>
              <p>Opis: {izdelek.opis}</p>
              <p>Kategorija ID: {izdelek.kategorija_id}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Izdelki;
