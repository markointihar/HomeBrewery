import axios from 'axios';

export default function TestAddEvent() {
    const handleDodaj = () => {
        axios.get('http://localhost:3000/dodaj-dogodek')
        .then(response => {
            console.log(response);
        })
    }

    


    return (
        <>
            <button onClick={handleDodaj}>dodaj</button>
        </>
    )
}