import "../styles/App.css";
import Aside from "./Aside";
import Title from "./Title"
import Career from "./Career";
import Project from "./Project";
import Work from "./Work";

export default function App() {
    return (
        <div className={"app"}>
            <div className="aside-main-container">
                <Aside className={"aside"} />
                <main>
                    <article
                        role={"contentinfo"}
                        aria-label={
                            "Farah's career objective, beloved project, and work experience"
                        }
                    >
                        <Title />
                        <Career />
                        <Project />
                        <Work />
                    </article>
                </main>
            </div>
        </div>
    );
}
