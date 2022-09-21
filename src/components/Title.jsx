import "../styles/Title.css";
import download from "../assets/download.png";

export default function Title() {
    return (
        <section
            className={"section-title"}
            role={"contentinfo"}
            aria-label={"Title as in name and professional position"}
        >
            <h1>Farah Massuh</h1>
            <div>
                <h2>FRONTEND DEVELOPER</h2>
                <img src={download} alt={"download"} />
            </div>
        </section>
    );
}
