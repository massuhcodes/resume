import "../styles/Aside.css"
import Contacts from "../components/Contacts"
import Skills from "../components/Skills"
import Education from "../components/Education"

export default function Aside() {
    return (
        <aside>
            <Contacts />
            <Skills />
            <Education />
        </aside>
    )
}