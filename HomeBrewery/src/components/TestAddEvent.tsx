import axios from 'axios';

export default function TestAddEvent() {
    const handleDodaj = () => {
        axios.get('http://localhost:3000/dodaj-dogodek')
        .then(response => {
            console.log(response);
        })
    }

    const odjava = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => {
            console.log(response);
            sessionStorage.removeItem('authToken');
        })
    }
    


    return (
        <>
            <button onClick={handleDodaj}>dodaj</button>
            <button onClick={odjava}>odjava</button>
        </>
    )
}