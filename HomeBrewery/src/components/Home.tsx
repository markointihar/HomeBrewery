import wheat from '../assets/wheat.svg'
import mirrorWheat from '../assets/mirrorWheat.svg'
import beer from '../assets/beer.svg';
import pfp from '../assets/profile.svg'
import beer1 from '../assets/beer1.svg';
import '../css/telo.css'

import { useEffect, useRef, useState } from 'react';



const steps = [
    "Korak 1: Pripravi sestavine - slad, hmelj, kvas in vodo. Skrbno izberi kakovostne surovine, ki bodo tvorile osnovo tvojega piva. Slad, hmelj in kvas so kot mojstri svojega rokodelstva, vsak s svojim značajem in vlogo, medtem ko je voda tista, ki jih združi v harmonično celoto, kot dirigent v simfoničnem orkestru.",
    "Korak 2: Zmešaj slad z vročo vodo za izdelavo slada. Kot alkimist iz antičnih časov, združi slad z vročo vodo in s tem ustvariš tekočino, ki nosi v sebi esenco preteklosti in obet prihodnosti. Ta proces sproži reakcije, ki bodo obogatile okus in aromo tvojega piva.",
    "Korak 3: Filtriraj sladovino, da ločiš tekočino od trdih delov. Kot lonar, ki iz glinenega kolača oblikuje posodo, loči tekoči eliksir od trdih delcev, da se lahko osredotočiš na bistvo. Ta proces je kot filtriranje misli - odstrani moteče elemente in pusti le čisto jedro.",
    "Korak 4: Zavri sladovino in dodaj hmelj za grenkobo in aromo. Kot kuhar, ki pripravlja svoj edinstven recept, zavri sladovino in dodaj hmelj, ki bo prispeval svoje značilne note grenkobe in aromatične kompleksnosti. Ta korak je ključen za ustvarjanje ravnotežja med sladkostjo in grenkobo v tvojem pivu.",
    "Korak 5: Ohladi sladovino in dodaj kvas za fermentacijo. Kot čarovnik, ki izgovarja uroke, ohladi sladovino in ji dodaj kvas, ki bo prevzel vodenje in začel svoje delo fermentacije. Kvas je kot skriti junak, ki tiho in neopazno opravlja svoje delo, vendar brez njega ni končnega obraza tvojega piva.",
    "Korak 6: Fermentiraj pri ustrezni temperaturi, dokler pivo ni pripravljeno. Kot čuvaj, ki bedi nad svojim zakladom, skrbno nadziraj temperaturo in pusti kvasu, da opravi svoje delo. Ta čas fermentacije je kot čas razmisleka - potreben je mir in potrpežljivost, da se razvije prava globina okusa.",
    "Korak 7: Stekleniči pivo in ga pusti, da dozori. Kot arhivar, ki zapisuje zgodovino, stekleniči pivo in ga pusti, da dozori v svojem času. Vsaka steklenička je kot dragocen spomin na trenutek, ko si rojen, in čas bo pokazal, kako se bo razvil in kako bo zorel v letih, ki prihajajo."
  ];
  

  const images = [
    wheat,
    mirrorWheat,
    beer,
    pfp,
    beer1
];
  

export default function Home(){

    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

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
    



    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (n:any) => {
        setCurrentIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
    };

    const getVisibleImages = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const nextIndex = (currentIndex + 1) % images.length;

        return [
            images[prevIndex],
            images[currentIndex],
            images[nextIndex]
        ];
    };

    const visibleImages = getVisibleImages();

    return (
        <div className="telo">
            <h1>Homebrewery</h1>
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

    

            <h1>Galerija</h1>
            <div className="carousel-container">
              <div className="carousel-slide">
                {visibleImages.map((src, index) => (
                  <img key={index} src={src} alt={`Slika ${index + 1}`} />
                ))}
              </div>
              <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
              <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>

        </div>
      );
}