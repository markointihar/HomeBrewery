import axios from 'axios';
import { useState } from 'react';

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
            naziv: <input name='naziv' type='text'value={recept.naziv} onChange={handleChange}></input>
            količina vode: <input name='voda_litrov' type='number'value={recept.voda_litrov} onChange={handleChange}></input>
            količina sladu v kg<input name='slad_kg' type='number'value={recept.slad_kg} onChange={handleChange}></input>
            količina hmelja v gramih: <input name='hmelj_g' type='number'value={recept.hmelj_g} onChange={handleChange}></input>
            čas dodajanja hmelja: <input name='cas_dodajanja_hmelja_min' type='number'value={recept.cas_dodajanja_hmelja_min} onChange={handleChange}></input>
            skupni čas kuhanja: <input name='skupni_cas_kuhanja_min' type='number'value={recept.skupni_cas_kuhanja_min} onChange={handleChange}></input>
            temperatura hlajenja: <input name='temperatura_hlajenja_c' type='number'value={recept.temperatura_hlajenja_c} onChange={handleChange}></input>
            število paketov kvasa: <input name='kvas_paketov' type='number'value={recept.kvas_paketov} onChange={handleChange}></input>
            temperatura fermentacije: <input name='temperatura_fermentacije_c' type='number'value={recept.temperatura_fermentacije_c} onChange={handleChange}></input>
            čas fermentacije v dnevih: <input name='cas_fermentacije_dni' type='number'value={recept.cas_fermentacije_dni} onChange={handleChange}></input>
            število gramov priming sladkorja na steklenico: <input name='priming_sladkor_g' type='number'value={recept.priming_sladkor_g} onChange={handleChange}></input>
            čas karbonizacije v dnevih: <input name='cas_karbonizacije_dni' type='number'value={recept.cas_karbonizacije_dni} onChange={handleChange}></input>
            čas zorjenja v dnevih<input name='cas_zorenja_dni' type='number'value={recept.cas_zorenja_dni} onChange={handleChange}></input>
            <button onClick={handleDodaj}>dodaj</button>
            <button onClick={odjava}>odjava</button>
        </>
    )
}