import '../css/profil.css';
import pfp from '../assets/profile.svg'
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
    }

    const handleReceptStanje = () => {
        setReceptStanje(!receptStanje);
        setPostStanje(false);
    }
    const handlePostStanje = () => {
        setPostStanje(!postStanje);
        setReceptStanje(false);
    }

    return (
        <>
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
                        return (
                            <div key={index} className='recept'>
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
                        );
                    })}
                </div>
            }
            
            
        </>
    );
}