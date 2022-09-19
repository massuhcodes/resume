import "../styles/Header.css";
import farahmassuh from "../assets/farahmassuh.png";
import download from "../assets/download.png";

export default function Header() {
    return (
        <header>
            <img src={farahmassuh} alt={"Farah Massuh's portrait"} />
            <hgroup>
                <h1>Farah Massuh</h1>
                <h2>Frontend Developer</h2>
            </hgroup>
            <img src={download} alt={"download"} />
        </header>
    );
}
