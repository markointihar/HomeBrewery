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
  const [slika, setSlika] = useState<File | null>(null);
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

  useEffect(() => {
    axios.get('http://localhost:3000/api/dodajIzdelek')
      .then(response => {
        setKategorije(response.data.kategorije);
      })
      .catch(error => {
        console.error('Prišlo je do napake pri pridobivanju podatkov:', error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const novIzdelek = { 
      naziv, 
      cena: parseFloat(cena), 
      opis, 
      zaloga: parseInt(zaloga), 
      slika,
      kategorija_id
    };
    
    axios.post('http://localhost:3000/api/izdelki', novIzdelek)
      .then(response => {
        setMessage('Izdelek uspešno dodan!');
        setNaziv('');
        setCena('');
        setOpis('');
        setZaloga('');
        setKategorijaId(null);
        setSlika(null);
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
            step="0.01"
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
          <label htmlFor="slika">Slika:</label>
          <input
            type="file"
            id="slika"
            onChange={(e) => setSlika(e.target.files?.[0] || null)}
          />
        </div>
        <button type="submit">Dodaj izdelek</button>
      </form>
    </div>
  );
};

export default DodajIzdelek;
