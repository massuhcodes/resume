import "../styles/Aside.css";
import Portrait from "../components/Portrait";
import Contacts from "../components/Contacts";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Aside() {
    return (
        <aside>
            <article
                role={"contentinfo"}
                aria-label={"Farah's contacts, skills, and education"}
            >
                <Portrait />
                <Contacts />
                <Skills />
                <Education />
            </article>
        </aside>
    );
}
