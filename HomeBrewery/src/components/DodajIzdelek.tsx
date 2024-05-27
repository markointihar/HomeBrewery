// src/components/DodajIzdelek.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DodajIzdelek.css';

interface Kategorija {
  id: number;
  naziv: string;
}

const DodajIzdelek: React.FC = () => {
  const [naziv, setNaziv] = useState('');
  const [cena, setCena] = useState('');
  const [opis, setOpis] = useState('');
  const [kategorija_id, setKategorijaId] = useState<number | null>(null);
  const [kategorije, setKategorije] = useState<Kategorija[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/dodajIzdelek')
      .then(response => {
        setKategorije(response.data.kategorije);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov:', error);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novIzdelek = { naziv, cena: parseFloat(cena), opis, kategorija_id };
    
    axios.post('http://localhost:3000/api/izdelki', novIzdelek)
      .then(response => {
        setMessage('Izdelek uspešno dodan!');
        setNaziv('');
        setCena('');
        setOpis('');
        setKategorijaId(null);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri dodajanju izdelka:', error);
        setMessage('Napaka pri dodajanju izdelka.');
      });
  };

  return (
    <div className="dodaj-izdelek-container">
      <h1>Dodaj Izdelek</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Naziv:
          <input type="text" value={naziv} onChange={(e) => setNaziv(e.target.value)} required />
        </label>
        <label>
          Cena:
          <input type="number" step="0.01" value={cena} onChange={(e) => setCena(e.target.value)} required />
        </label>
        <label>
          Opis:
          <textarea value={opis} onChange={(e) => setOpis(e.target.value)} required />
        </label>
        <label>
          Kategorija:
          <select value={kategorija_id || ''} onChange={(e) => setKategorijaId(Number(e.target.value))} required>
            <option value="">Izberi kategorijo</option>
            {kategorije.map(kategorija => (
              <option key={kategorija.id} value={kategorija.id}>{kategorija.ime}</option>
            ))}
          </select>
        </label>
        <button type="submit">Dodaj Izdelek</button>
      </form>
    </div>
  );
};

export default DodajIzdelek;
