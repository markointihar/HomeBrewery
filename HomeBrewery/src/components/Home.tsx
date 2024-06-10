import wheat from '../assets/wheat.svg'
import mirrorWheat from '../assets/mirrorWheat.svg'
import '../css/telo.css'
import wheatbackground from '../assets/wheat.jpg'

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const steps = [
    "Korak 1: Pripravi sestavine - slad, hmelj, kvas in vodo. Skrbno izberi kakovostne surovine, ki bodo tvorile osnovo tvojega piva. Slad, hmelj in kvas so kot mojstri svojega rokodelstva, vsak s svojim značajem in vlogo, medtem ko je voda tista, ki jih združi v harmonično celoto, kot dirigent v simfoničnem orkestru.",
    "Korak 2: Zmešaj slad z vročo vodo za izdelavo slada. Kot alkimist iz antičnih časov, združi slad z vročo vodo in s tem ustvariš tekočino, ki nosi v sebi esenco preteklosti in obet prihodnosti. Ta proces sproži reakcije, ki bodo obogatile okus in aromo tvojega piva.",
    "Korak 3: Filtriraj sladovino, da ločiš tekočino od trdih delov. Kot lonar, ki iz glinenega kolača oblikuje posodo, loči tekoči eliksir od trdih delcev, da se lahko osredotočiš na bistvo. Ta proces je kot filtriranje misli - odstrani moteče elemente in pusti le čisto jedro.",
    "Korak 4: Zavri sladovino in dodaj hmelj za grenkobo in aromo. Kot kuhar, ki pripravlja svoj edinstven recept, zavri sladovino in dodaj hmelj, ki bo prispeval svoje značilne note grenkobe in aromatične kompleksnosti. Ta korak je ključen za ustvarjanje ravnotežja med sladkostjo in grenkobo v tvojem pivu.",
    "Korak 5: Ohladi sladovino in dodaj kvas za fermentacijo. Kot čarovnik, ki izgovarja uroke, ohladi sladovino in ji dodaj kvas, ki bo prevzel vodenje in začel svoje delo fermentacije. Kvas je kot skriti junak, ki tiho in neopazno opravlja svoje delo, vendar brez njega ni končnega obraza tvojega piva.",
    "Korak 6: Fermentiraj pri ustrezni temperaturi, dokler pivo ni pripravljeno. Kot čuvaj, ki bedi nad svojim zakladom, skrbno nadziraj temperaturo in pusti kvasu, da opravi svoje delo. Ta čas fermentacije je kot čas razmisleka - potreben je mir in potrpežljivost, da se razvije prava globina okusa.",
    "Korak 7: Stekleniči pivo in ga pusti, da dozori. Kot arhivar, ki zapisuje zgodovino, stekleniči pivo in ga pusti, da dozori v svojem času. Vsaka steklenička je kot dragocen spomin na trenutek, ko si rojen, in čas bo pokazal, kako se bo razvil in kako bo zorel v letih, ki prihajajo."
  ];

export default function Home(){

    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate');
              } else {
                entry.target.classList.remove('animate');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        sectionsRef.current.forEach((section) => {
          if (section) observer.observe(section);
        });
    
        return () => {
          sectionsRef.current.forEach((section) => {
            if (section) observer.unobserve(section);
          });
        };
      }, []);


    const createRoom = async () => {
      const response = await fetch("https://home-brewery-server.vercel.app/create-room");
      const data = await response.json();
      navigate(`/room/${data.roomId}`);
    };

    return (
        <div className="telo">
              <div className="image-container">
                <img src={wheatbackground} alt="Your Alt Text" className="background-image" />
                <div className='overlay-text'>
                  <h1>HomeBrewery</h1>
                  <h2>Homebrewing je umetnost in znanost priprave lastnega piva doma. Ta proces vključuje več korakov, vsak s svojimi tehnikami in posebnostmi, ki prispevajo k končnemu okusu in značaju piva.</h2>
                  <h2>Brskajte po <Link to="/forum">forumu</Link>, <Link to="/izdelki">kupujte</Link> potrebne pripomočke in surovine, <Link to="/dodaj">planirajte svoj Homebrew</Link>  ter, če ste v dvomih vprašajte za <Link to="" onClick={createRoom}>pomoč</Link></h2>
                </div>
                
                </div>
            <div className="home-container">
              <img src={wheat} alt="Wheat" />
              <div className='top-div'>
                <p>Homebrewing je umetnost in znanost priprave lastnega piva doma. Ta proces vključuje več korakov, vsak s svojimi tehnikami in posebnostmi, ki prispevajo k končnemu okusu in značaju piva.</p>
              </div>
              <img src={mirrorWheat} alt="Mirror Wheat" />
            </div>

    
            <div className='koraki'>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionsRef.current[index + 1] = el)}
                        className="section"
                        >
                        <p>{step}</p>
                    </div>
                ))}
            </div>

        </div>
      );
}