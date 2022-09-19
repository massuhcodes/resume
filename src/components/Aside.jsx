import "../styles/Aside.css";
import Contacts from "../components/Contacts";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Aside() {
    return (
        <aside>
            <article
                role={"contentinfo"}
                aria-label={
                    "Article about Farah's Contacts, Skills, and Education"
                }
            >
                <Contacts />
                <Skills />
                <Education />
            </article>
        </aside>
    );
}
