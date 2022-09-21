import "../styles/Portrait.css";
import farahmassuh from "../assets/farahmassuh.png";

export default function Portrait() {
    return (
        <section
            className={"section-portrait"}
            role={"contentinfo"}
            aria-label={"Farah Massuh's Image"}
        >
            <img src={farahmassuh} alt={"Image of Farah Massuh"} />
        </section>
    );
}
