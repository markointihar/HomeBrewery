// src/components/DodajIzdelek.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DodajIzdelek.css';

interface Kategorija {
  id: number;
  ime: string;
}

const DodajIzdelek: React.FC = () => {
  const [izdelek, setIzdelek] = useState({
    naziv: '',
    cena: '',
    opis: '',
    zaloga: '',
    slikaUrl: '',
    kategorija_id: null,
  });
  const [kategorije, setKategorije] = useState<Kategorija[]>([]);
  const [, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://home-brewery-server.vercel.app/api/dodajIzdelek')
      .then(response => {
        setKategorije(response.data.kategorije);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov:', error);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setIzdelek(prevState => ({
      ...prevState,
      [name]: name === 'kategorija_id' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Izdelek, ki se doda:'izdelek)
    axios.post('https://home-brewery-server.vercel.app/api/izdelki', izdelek, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Dodan izdelek response:', response.data);
      setMessage('Izdelek uspešno dodan!');
      setIzdelek({
        naziv: '',
        cena: '',
        opis: '',
        zaloga: '',
        slikaUrl: '',
        kategorija_id: null,
      });
    })
    .catch(error => {
      console.error('Prišlo je do napake pri dodajanju izdelka:', error);
      setMessage('Napaka pri dodajanju izdelka.');
    });
  };

  return (
    <div className="dodaj-izdelek-container">
      <h1>Dodaj izdelek</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="naziv">Naziv:</label>
          <input
            type="text"
            id="naziv"
            name="naziv"
            value={izdelek.naziv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cena">Cena:</label>
          <input
            type="number"
            id="cena"
            name="cena"
            value={izdelek.cena}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="opis">Opis:</label>
          <textarea
            id="opis"
            name="opis"
            value={izdelek.opis}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="zaloga">Zaloga:</label>
          <input
            type="number"
            id="zaloga"
            name="zaloga"
            value={izdelek.zaloga}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="kategorija_id">Kategorija:</label>
          <select
            id="kategorija_id"
            name="kategorija_id"
            value={izdelek.kategorija_id || ''}
            onChange={handleChange}
            required
          >
            <option value="">Izberi kategorijo</option>
            {kategorije.map(kategorija => (
              <option key={kategorija.id} value={kategorija.id}>{kategorija.ime}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="slikaUrl">URL slike:</label>
          <input
            type="text"
            id="slikaUrl"
            name="slikaUrl"
            value={izdelek.slikaUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Dodaj izdelek</button>
      </form>
    </div>
  );
};

export default DodajIzdelek;
