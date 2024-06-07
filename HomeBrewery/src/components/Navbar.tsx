import { useState } from "react";
import beer from "../assets/beer.svg";
import pfp from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [, setRoomLink] = useState("");
  const navigate = useNavigate();

  const createRoom = async () => {
    const response = await fetch("http://localhost:3000/create-room");
    const data = await response.json();
    setRoomLink(data.link);
    navigate(`/room/${data.roomId}`);
  };

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/login";
  };

  const ustvariRecept = () => {
    window.location.href = "http://localhost:5173/dodaj";
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
          onClick={() => (window.location.href = "http://localhost:5173")}
        >
          Domov
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "http://localhost:5173/izdelki")
          }
        >
          Trgovina
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "http://localhost:5173/kosarica")
          }
        >
          Košarica
        </div>
        <div
          className="item"
          onClick={() =>
            (window.location.href = "http://localhost:5173/forum")
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
            (window.location.href = "http://localhost:5173/profil")
          }
        />
      )}
    </div>
  );
}
