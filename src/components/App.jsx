import "../styles/App.css";
import Header from "./Header";
import Aside from "./Aside";
import Career from "./Career";
import Project from "./Project";
import Work from "./Work";

export default function App() {
    return (
        <div>
            <Header />
            <Aside />
            <main>
                <article
                    role={"contentinfo"}
                    aria-label={
                        "Farah's career objective, beloved project, and work experience"
                    }
                >
                    <Career />
                    <Project />
                    <Work />
                </article>
            </main>
        </div>
    );
}
