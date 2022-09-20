import "../styles/Header.css";
import farahmassuh from "../assets/farahmassuh.png";
import download from "../assets/download.png";

export default function Header() {
    return (
        <header>
            <img
                src={farahmassuh}
                className={"portrait"}
                alt={"Farah Massuh's portrait"}
            />
            <h1>Farah Massuh</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <img src={download} className={"download"} alt={"download"} />
        </header>
    );
}
