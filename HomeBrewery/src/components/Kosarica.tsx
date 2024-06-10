// src/components/Kosarica.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/kosarica.css';

interface Izdelek {
  id: number;
  naziv: string;
  cena: number;
  opis: string;
  slika: string | null;
}

const Kosarica: React.FC = () => {
  const [kosarica, setKosarica] = useState<Izdelek[]>([]);

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    setKosarica(cart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = kosarica.filter(izdelek => izdelek.id !== id);
    setKosarica(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

/*mašina ne je dela 

const handlePurchase = async () => {
    try {
      for (const izdelek of kosarica) {
        await axios.post('https://home-brewery-server.vercel.app/api/izdelki/kupi', { id: izdelek.id });
      }
      alert('Nakup uspešno potrjen!');
      sessionStorage.removeItem('cart');
      setKosarica([]);
    } catch (error) {
      console.error('Napaka pri potrjevanju nakupa:', error);
    }
  }; */

  const purchaseIzdelek = async (id: number) => {
    try {
      const response = await axios.post('https://home-brewery-server.vercel.app/api/izdelki/kupi', { id });
      console.log(response.data); // Assuming response contains 'Nakup uspešno potrjen'
      const updatedKosarica = kosarica.filter(item => item.id !== id);
      setKosarica(updatedKosarica);
    } catch (error) {
      console.error('Prišlo je do napake pri nakupu izdelka:', error);
    }
  };

  const confirmPurchase = async () => {
    for (const izdelek of kosarica) {
      await purchaseIzdelek(izdelek.id);
    }
    setKosarica([]);
    sessionStorage.removeItem('cart');
  };

  const totalCena = kosarica.reduce((total, izdelek) => total + izdelek.cena, 0);

  
  // glej 3/5 in 5/5
  return (
    <div className="kosarica-container">
      <h1>Košarica</h1>
      {kosarica.length === 0 ? (
        <p>Vaša košarica je prazna.</p>
      ) : (
        <>
          <div className='izdelkii-container'>
            {kosarica.map((izdelek, index) => (
              <div className='izdelekk' key={index}>
                <div className='izdelek-child'>
                  <h2>{izdelek.naziv}</h2>
                  {izdelek.slika && <img src={`https://home-brewery-server.vercel.app/uploads/${izdelek.slika}`} alt={izdelek.naziv} />}
                </div>
                <div className='izdelek-child'>
                  <p>Cena: {izdelek.cena} EUR</p>
                  <p>Opis: {izdelek.opis}</p>
                </div>
                <div className='izdelek-child'>
                  <button onClick={() => removeFromCart(izdelek.id)}>Odstrani</button>
                </div>
                
              </div>
            ))}
          </div>
          <p>Skupna cena: {totalCena} EUR</p>
          <button onClick={confirmPurchase}>Potrdi nakup</button>
        </>
      )}
    </div>
  );
};

export default Kosarica;
