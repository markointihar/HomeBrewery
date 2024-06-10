import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/izdelki.css';
import { Link } from 'react-router-dom';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  zaloga: number;
  slika: string | null;
  ime_kategorije: string;
  kategorija_id: number | null;
  
}

interface Kategorija {
  id: number;
  ime: string;
}

const Izdelki: React.FC = () => {
  const [izdelki, setIzdelki] = useState<Izdelek[]>([]);
  const [kategorije, setKategorije] = useState<Kategorija[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    axios.get('https://home-brewery-server.vercel.app/api/izdelki')
    .then(response => {
      const data = response.data.izdelki.map((izdelek: any) => {
        const decoder = new TextDecoder('utf-8');
        const slika = decoder.decode(new Uint8Array(izdelek.slika.data));
        
        return {
          ...izdelek,
          slika // Pretvorimo Buffer nazaj v niz
        };
      });
      console.log(data); // Preverimo, kaj dobimo po pretvorbi
      setIzdelki(data);
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

  const addToCart = (izdelek: Izdelek) => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.push(izdelek);
    sessionStorage.setItem('cart', JSON.stringify(cart));
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
        <div className='izdelki'>
          {filteredIzdelki.map((izdelek, index) => (
            <div key={index} className="izdelek">
              <Link to={`/izdelki/${izdelek.id}`}>
                <h2>{izdelek.naziv}</h2>
                {izdelek.slika && <img src={`https://home-brewery-server.vercel.app/uploads/${izdelek.slika}`} alt={izdelek.naziv} />} {/* Posodobljeno: pravilna sestava URL-ja */}
              </Link>
              <p>Cena: {izdelek.cena} EUR</p>
              <p>Opis: {izdelek.opis}</p>
              <p>Zaloga: {izdelek.zaloga}</p>
              <p>Kategorija: {izdelek.ime_kategorije}</p>
              <button onClick={() => addToCart(izdelek)}>Dodaj v košarico</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Izdelki;
