import { useState } from "react";
import beer from "../assets/beer.svg";
import pfp from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [, setRoomLink] = useState("");
  const navigate = useNavigate();

  const createRoom = async () => {
    const response = await fetch("https://home-brewery-server.vercel.app/create-room");
    const data = await response.json();
    setRoomLink(data.link);
    navigate(`/room/${data.roomId}`);
  };

  const handleLogin = () => {
    window.location.href = "https://home-brewery-server.vercel.app/login";
  };

  const ustvariRecept = () => {
    window.location.href = "https://home-brewery.vercel.app/dodaj";
  };

  return (
    <div className="navbar">
      <img src={beer} alt="beer" />
      <div className="nav-items">
        <div className="item" onClick={createRoom}>
          Pomoč
        </div>
        <div className="item" onClick={ustvariRecept}>
          Ustvari recept
        </div>
        <div
          className="item"
          onClick={() => (window.location.href = "https://home-brewery.vercel.app")}
        >
          Domov
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "https://home-brewery.vercel.app/izdelki")
          }
        >
          Trgovina
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "https://home-brewery.vercel.app/kosarica")
          }
        >
          Košarica
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "https://home-brewery.vercel.app/forum")
          }
        >
          Forum
        </div>

        {sessionStorage.getItem("authToken") === null && (
          <div className="item" onClick={handleLogin}>
            Login
          </div>
        )}
      </div>
      {sessionStorage.getItem("authToken") !== null && (
        <img
          src={pfp}
          onClick={() =>
            (window.location.href = "https://home-brewery.vercel.app/profil")
          }
        />
      )}
    </div>
  );
}
