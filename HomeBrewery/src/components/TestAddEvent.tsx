import axios from 'axios';
import { useState } from 'react';
import Navbar from './Navbar';
import '../css/dodajRecept.css';

export default function TestAddEvent() {
    const [recept, setRecept] = useState({
        naziv: '',
        voda_litrov: 10,
        slad_kg: 3,
        hmelj_g: 50,
        cas_dodajanja_hmelja_min: 30,
        skupni_cas_kuhanja_min: 60,
        temperatura_hlajenja_c: 20,
        kvas_paketov: 1,
        temperatura_fermentacije_c: 20,
        cas_fermentacije_dni: 10,
        priming_sladkor_g: 5,
        cas_karbonizacije_dni: 10,
        cas_zorenja_dni: 7,
    });

    const handleDodaj = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const google_id = sessionStorage.getItem('authToken');
        const userResponse = await axios.get('http://localhost:3000/get-user-id', {
            params: {
                google_id: google_id
            }
        });
        const userId = userResponse.data.id;
        const vsiPodatki = {
            ...recept,
            user_id: userId
        }

        await axios.get('http://localhost:3000/dodaj-dogodek', {
            params: {
                cas_fermentacije_dni: recept.cas_fermentacije_dni,
                cas_karbonizacije_dni: recept.cas_karbonizacije_dni,
                cas_zorenja_dni: recept.cas_zorenja_dni
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
        await axios.post('http://localhost:3000/shrani-recept', vsiPodatki, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const odjava = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => {
            console.log(response);
            sessionStorage.removeItem('authToken');
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRecept(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    


    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Brewing planer</h1>
                <div className='intro'>
                    <p>
                    Spodaj je preprost recept za varjenje piva. Ob vsaki sestavini imate možnost prilagoditi količino, prav 
                    tako pa lahko pri vsakem postopku spremenite trajanje. Ko ste zadovoljni s svojim receptom in pripravljeni 
                    na varjenje, kliknite gumb, da se bodo pomembni dogodki samodejno dodali v vaš Google Koledar. Shranjen 
                    recept bo prav tako na voljo v vašem profilu.
                    </p>
                </div>
                <h2>Oprema</h2>
                <div >
                    <p>
                        Za varjenje tega piva boste potrebovali:
                    </p>
                    <ul>
                        <li>Posodo za kuhanje (vsaj 20 litrov)</li>
                        <li>Fermentor (plastična ali steklena posoda s pokrovom)</li>
                        <li>Zračni ventil</li>
                        <li>Termometer</li>
                        <li>Hidrometer</li>
                        <li>Sifonska cev</li>
                        <li>Steklenice in pokrovčki</li>
                        <li>Čistilna sredstva</li>
                    </ul>        
                </div>
                <h2>Recept</h2>
                <div>
                Poimenuj svoj recept: <input name='naziv' type='text'value={recept.naziv} onChange={handleChange}></input>
                <ol role="list">
                    <li >
                        <h3>Sterilizacija</h3>
                        <p>
                        Pred začetkom sterilizirajte vso opremo, ki bo prišla v stik s pivom, da preprečite okužbe.
                        </p>
                    </li>
                    <li >
                        <h3>Kuhanje sladice (wort)</h3>
                        <p>
                            V velikem loncu zavrite približno <input name='voda_litrov' type='number'value={recept.voda_litrov} onChange={handleChange}></input> vode
                            Ko voda zavre, dodajte <input name='slad_kg' type='number'value={recept.slad_kg} onChange={handleChange}></input> kg ječmenovega slada ali sladnega izvlečka. Mešajte, da se popolnoma raztopi.
                            Dodajte <input name='hmelj_g' type='number'value={recept.hmelj_g} onChange={handleChange}></input> gramov hmelja za grenkobo, 
                            po <input name='cas_dodajanja_hmelja_min' type='number'value={recept.cas_dodajanja_hmelja_min} onChange={handleChange}></input> kuhanja.
                            Kuhajte skupno <input name='skupni_cas_kuhanja_min' type='number'value={recept.skupni_cas_kuhanja_min} onChange={handleChange}></input> minut.
                        </p>
                    </li>
                    <li >
                        <h3>Hlajenje sladice</h3>
                        <p>
                            Po končanem kuhanju sladico hitro ohladite na približno <input name='temperatura_hlajenja_c' type='number'value={recept.temperatura_hlajenja_c} onChange={handleChange}></input>
                            z uporabo ledene kopeli ali hladilne tuljave.
                        </p>
                    </li>
                    <li >
                        <h3>Fermentacija</h3>
                        <p>
                            Prelijte ohlajeno sladico v steriliziran fermentor.Ko je sladica ohlajena na 
                            {recept.temperatura_hlajenja_c}, dodajte 
                            <input name='kvas_paketov' type='number'value={recept.kvas_paketov} onChange={handleChange}></input> paketov kvasa. Temeljito premešajte.
                            Zaprite fermentor in namestite zračni ventil. 
                            Postavite fermentor v temen prostor s stabilno temperaturo 
                            <input name='temperatura_fermentacije_c' type='number'value={recept.temperatura_fermentacije_c} onChange={handleChange}></input> stopinj za približno
                            <input name='cas_fermentacije_dni' type='number'value={recept.cas_fermentacije_dni} onChange={handleChange}></input> dni.
                        </p>
                    </li>
                    <li >
                        <h3>Stekleničenje</h3>
                        <p>
                            Sterilizirajte steklenice in pokrovčke.
                            V vsako steklenico dodajte  <input name='priming_sladkor_g' type='number'value={recept.priming_sladkor_g} onChange={handleChange}></input> gramov
                            priming sladkorja (ali pripravite raztopino in jo dodajte pivini pred stekleničenjem).S sifonsko cevjo previdno prelijte pivo iz fermentorja v steklenice, pri čemer pazite, da ne premešate usedline na dnu fermentorja.
                            Zaprite steklenice s pokrovčki.
                        </p>
                    </li>
                    <li>
                        <h3>Karbonizacija</h3>
                        <p>
                            Postavite steklenice v temen prostor pri sobni temperaturi za 
                            <input name='cas_karbonizacije_dni' type='number'value={recept.cas_karbonizacije_dni} onChange={handleChange}></input>, da se pivo karbonizira.
                        </p>
                    </li>
                    <li >
                        <h3>Uživanje</h3>
                        <p>
                        Počakajte vsaj <input name='cas_zorenja_dni' type='number'value={recept.cas_zorenja_dni} onChange={handleChange}></input> dni, 
                        da se okusi razvijejo, nato pa ohladite steklenice in uživajte v svojem domačem pivu!    
                        </p>
                    </li>
                </ol>
                </div>
                
                <button onClick={handleDodaj}>dodaj</button>
                <button onClick={odjava}>odjava</button>
        </div>
        </>
    )
}