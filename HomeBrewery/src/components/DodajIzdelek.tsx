// src/components/DodajIzdelek.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DodajIzdelek.css';

interface Kategorija {
  id: number;
  ime: string;
}

const DodajIzdelek: React.FC = () => {
  const [naziv, setNaziv] = useState('');
  const [cena, setCena] = useState('');
  const [opis, setOpis] = useState('');
  const [zaloga, setZaloga] = useState('');
  const [slikaUrl, setSlikaUrl] = useState('');
  const [kategorija_id, setKategorijaId] = useState<number | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const izdelekData = {
      naziv,
      cena,
      opis,
      zaloga,
      slika: slikaUrl, // Use the URL instead of a file
      kategorija_id,
    };

    axios.post('https://home-brewery-server.vercel.app/api/izdelki', izdelekData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Dodan izdelek response:', response.data);
      setMessage('Izdelek uspešno dodan!');
      setNaziv('');
      setCena('');
      setOpis('');
      setZaloga('');
      setKategorijaId(null);
      setSlikaUrl('');
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
            value={naziv}
            onChange={(e) => setNaziv(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cena">Cena:</label>
          <input
            type="number"
            id="cena"
            value={cena}
            onChange={(e) => setCena(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="opis">Opis:</label>
          <textarea
            id="opis"
            value={opis}
            onChange={(e) => setOpis(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="zaloga">Zaloga:</label>
          <input
            type="number"
            id="zaloga"
            value={zaloga}
            onChange={(e) => setZaloga(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="kategorija_id">Kategorija:</label>
          <select value={kategorija_id || ''} onChange={(e) => setKategorijaId(Number(e.target.value))} required>
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
            value={slikaUrl}
            onChange={(e) => setSlikaUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Dodaj izdelek</button>
      </form>
    </div>
  );
};

export default DodajIzdelek;
