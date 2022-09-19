import "../styles/Header.css";
import farahmassuh from "../assets/farahmassuh.png";

export default function Header() {
    return (
        <header>
            <img src={farahmassuh} />
            <hgroup>
                <h1>Farah Massuh</h1>
                <h2>Frontend Developer</h2>
            </hgroup>
        </header>
    );
}
