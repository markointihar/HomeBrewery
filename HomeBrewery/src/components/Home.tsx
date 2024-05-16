import wheat from '../assets/wheat.svg'
import mirrorWheat from '../assets/mirrorWheat.svg'
import beer from '../assets/beer.svg';
import pfp from '../assets/profile.svg'
import beer1 from '../assets/beer1.svg';
import '../css/telo.css'

import { useState } from 'react';

export default function Home(){

    const images = [
        wheat,
        mirrorWheat,
        beer,
        pfp,
        beer1
    ];

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
                <img src={wheat}/>
                <div className='top-div'>
                    ueoauaoeueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uauaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa
                </div>
                <img src={mirrorWheat} />
            </div>
            <div className="grid-home">
                <div className="grid1">
                ueoauaoeueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeokuueoauaoeueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uauaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.a., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uauaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa
                </div>
                <div className="grid2">
                    ueoauaoeuaeueoauaoeuaeoku., uau a,.u kou aou aoeua.ueoauaoeuaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeuaueoauaoeuaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uaoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa
                </div>
                <div className="grid3">
                ueoauaoeuaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeuaueoauaoeuaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa v ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uaeoku., uau a,.u kou aou aoeua. ua uap.axa ueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axaueoauaoeuaeoku., uau a,.u kou aou aoeua. ua uap.axa
                </div>
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
    )
}