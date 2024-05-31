import React from 'react';
import '../css/Popular.css';
import Sidebar from '../components/Sidebar';
import '../css/Container.css';
import RightSidebar from '../components/RightSidebar';


const Popular: React.FC = () => {
    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                <h2>Trenutno popularno</h2>
                <div className="post">
                    <div className="vote">
                        <button className="upvote">▲</button>
                        <span className="score">200</span>
                        <button className="downvote">▼</button>
                    </div>
                    <div className="post-content">
                        <h2><a href="#">Najboljši načini za fermentacijo</a></h2>
                        <p>Objavljeno 25.5.2024 | Piwko</p>
                        <p className="comments"><a href="#">20 komentarjev</a></p>
                    </div>
                </div>
                <div className="post">
                    <div className="vote">
                        <button className="upvote">▲</button>
                        <span className="score">180</span>
                        <button className="downvote">▼</button>
                    </div>
                    <div className="post-content">
                        <h2><a href="#">Moj recept za IPA</a></h2>
                        <p>Objavljeno 20.5.2024 | goatedBrewer</p>
                        <p className="comments"><a href="#">15 komentarjev</a></p>
                    </div>
                </div>
            </main>
            <RightSidebar />
        </div>
    );
};

export default Popular;
