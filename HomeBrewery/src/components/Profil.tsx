import '../css/profil.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profil() {

    const [userIme, setUserIme] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPfp, setUserPfp] = useState('');
    const [userRecepti, setUserRecepti] = useState([]);
    const [receptStanje, setReceptStanje] = useState(false);
    const [postStanje, setPostStanje] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/get-user', {
            params: {
                google_id: sessionStorage.getItem('authToken')
            }
        })
            .then(response => {
                setUserIme(response.data.name);
                setUserEmail(response.data.email);
                setUserPfp(response.data.profile_picture);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get('http://localhost:3000/moji-recepti', {
            params: {
                google_id: sessionStorage.getItem('authToken')
            }
        })
            .then(response => {
                setUserRecepti(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const odjava = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => {
            console.log(response);
            sessionStorage.removeItem('authToken');
        })
        // refresh page
        window.location.reload();
    }

    const handleReceptStanje = () => {
        setReceptStanje(!receptStanje);
        setPostStanje(false);
    }
    const handlePostStanje = () => {
        setPostStanje(!postStanje);
        setReceptStanje(false);
    }

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleReceptKlik = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    }
    return (
        <>
        {
            sessionStorage.getItem('authToken') === null &&
            <>
                <h1>Prosim prijavi se</h1>
                <a href='http://localhost:3000/login'>Prijava </a>         
            </>

        }
        {
            sessionStorage.getItem('authToken') !== null &&
            <div className="parent">
            <div className="div1">
                <img src={userPfp} alt='profilna slika'/>
            </div>
            <div className="div2">
                <h1>Osebni Podatki</h1>
                <p>Ime: {userIme}</p>
                <p>Email: {userEmail}</p>
                <button onClick={odjava}>Odjava</button> 
            </div>
            <div className="div3">
                    <div className="item" onClick={handleReceptStanje}>
                        <p>Moji Recepti</p>
                    </div>

                    <div className="item" onClick={handlePostStanje}>
                        <p>Moji Posti</p>
                    </div>             
            </div>
        </div>
        }
        {
            receptStanje && 
            <div className='moji-recepti'>
                {userRecepti.map((recept: { 
                    naziv: string, 
                    voda_litrov: number, 
                    slad_kg:number, 
                    hmelj_g: number, 
                    cas_dodajanja_hmelja_min:number 
                    skupni_cas_kuhanja_min:number,
                    temperatura_hlajenja_c:number,
                    kvas_paketov:number,
                    temperatura_fermentacije_c:number,
                    cas_fermentacije_dni:number,
                    priming_sladkor_g:number,
                    cas_karbonizacije_dni:number,
                    cas_zorenja_dni:number,
                }, index: number) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <>
                            {
                                !isExpanded &&
                                <div key={index} className={`recept ${isExpanded}`} onClick={(event) => handleReceptKlik(index)}>
                                <h2>{recept.naziv}</h2>
                                <p>Voda: {recept.voda_litrov} l</p>
                                <p>Slad: {recept.slad_kg} kg</p>
                                <p>Kmelj: {recept.hmelj_g} g</p>
                                <p>Čas dodajanja hmelja: {recept.cas_dodajanja_hmelja_min} min</p>
                                <p>Skupni čas kuhanja: {recept.skupni_cas_kuhanja_min} min</p>
                                <p>Temperatura hlajenja: {recept.temperatura_hlajenja_c} °C</p>
                                <p>Kvas: {recept.kvas_paketov} paketov</p>
                                <p>Temperatura fermentacije: {recept.temperatura_fermentacije_c} °C</p>
                                <p>Čas fermentacije: {recept.cas_fermentacije_dni} dni</p>
                                <p>Priming sladkor: {recept.priming_sladkor_g} g</p>
                                <p>Čas karbonizacije: {recept.cas_karbonizacije_dni} dni</p>
                                <p>Čas zorenja: {recept.cas_zorenja_dni} dni</p>
                                
                            </div>
                            }
                            {
                                isExpanded &&
                                <div key={index} className={`recept ${isExpanded}`} onClick={(event) => handleReceptKlik(index)}>
                                    <h1>{recept.naziv}</h1>
                                    <h2>Sterilizacija</h2>
                                    <p>
                                    Pred začetkom sterilizirajte vso opremo, ki bo prišla v stik s pivom, da preprečite okužbe.
                                    </p>
                                    <h2>Kuhanje sladice (wort)</h2>
                                    <p>
                                        V velikem loncu zavrite približno <b>{recept.voda_litrov}</b> litrov vode
                                        Ko voda zavre, dodajte <b>{recept.slad_kg}</b> kg ječmenovega slada ali sladnega izvlečka. Mešajte, da se popolnoma raztopi.
                                        Dodajte <b>{recept.hmelj_g}</b> gramov hmelja za grenkobo, 
                                        po <b>{recept.cas_dodajanja_hmelja_min}</b> minutah kuhanja.
                                        Kuhajte skupno <b>{recept.skupni_cas_kuhanja_min}</b> minut.
                                    </p>
                                    <h2>Hlajenje sladice</h2>
                                    <p>
                                        Po končanem kuhanju sladico hitro ohladite na približno <b>{recept.temperatura_hlajenja_c}</b> stopinj
                                        z uporabo ledene kopeli ali hladilne tuljave.
                                    </p>
                                    <h2>Fermentacija</h2>
                                    <p>
                                        Prelijte ohlajeno sladico v steriliziran fermentor.Ko je sladica ohlajena na 
                                        {recept.temperatura_hlajenja_c}, dodajte 
                                        <b>{recept.kvas_paketov}</b> paketov kvasa. Temeljito premešajte.
                                        Zaprite fermentor in namestite zračni ventil. 
                                        Postavite fermentor v temen prostor s stabilno temperaturo 
                                        <b>{recept.temperatura_fermentacije_c}</b> stopinj za približno
                                        <b>{recept.cas_fermentacije_dni}</b> dni.
                                    </p>
                                    <h2>Stekleničenje</h2>
                                    <p>
                                        Sterilizirajte steklenice in pokrovčke.
                                        V vsako steklenico dodajte <b>{recept.priming_sladkor_g}</b> gramov
                                        priming sladkorja (ali pripravite raztopino in jo dodajte pivini pred stekleničenjem).S sifonsko cevjo previdno prelijte pivo iz fermentorja v steklenice, pri čemer pazite, da ne premešate usedline na dnu fermentorja.
                                        Zaprite steklenice s pokrovčki.
                                    </p>
                                    <h2>Karbonizacija</h2>
                                    <p>
                                        Postavite steklenice v temen prostor pri sobni temperaturi za <b>{recept.cas_karbonizacije_dni}</b> da se pivo karbonizira.
                                    </p>
                                    <h2>Uživanje</h2>
                                    <p>
                                        Počakajte vsaj <b>{recept.cas_zorenja_dni}</b> dni, 
                                        da se okusi razvijejo, nato pa ohladite steklenice in uživajte v svojem domačem pivu!    
                                    </p>
                                </div>
                            }
                        </>

                    );
                })}
            </div>
        }
            
            
            
        </>
    );
}