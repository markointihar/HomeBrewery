import beer from '../assets/beer.svg';
import pfp from '../assets/profile.svg'

export default function Navbar(){
    return (
        <div className="navbar">
            <img src={beer}/>
            <div className='nav-items'>
                <div className="item">
                    prvi
                </div>
                <div className="item">
                    prvi
                </div>
                <div className="item">
                    prvi
                </div>
            </div>
            <img src={pfp}/>
            
        </div>
    )
}
