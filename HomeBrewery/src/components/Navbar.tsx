import { useState } from 'react';
import beer from '../assets/beer.svg';
import pfp from '../assets/profile.svg'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
    const [roomLink, setRoomLink] = useState('');
    const navigate = useNavigate()
  
    const createRoom = async () => {
        const response = await fetch('http://localhost:3000/create-room');
        const data = await response.json();
        setRoomLink(data.link);
        navigate(`/room/${data.roomId}`);
    };

    
    return (
        <div className="navbar">
            <img src={beer} alt='beer'/>
            

            
            <div className='nav-items' >
                <div className="item" onClick={createRoom}>
                    Pomoč
                </div>
                
                <div className="item">
                    <Link to={'/'} >
                        Home
                    </Link>
                </div>
                <div className="item">
                    <Link to="/kosarica">Košarica</Link>
                </div>
                
                <div className="item">
                    prvi
                </div>
            </div>
            <img src={pfp}/>
            
        </div>
    )
}
