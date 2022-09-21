import "../styles/Skills.css";

export default function Skills() {
    return (
        <section
            className="section-skills"
            role={"contentinfo"}
            aria-label="Skills"
        >
            <h2>SKILLS</h2>
            <section
                className={"skills-subsection"}
                role={"contentinfo"}
                aria-label="Languages"
            >
                <h3>LANGUAGES</h3>
                <span>html5</span>
                <span>css3</span>
                <span>javascript</span>
                <span>python</span>
                <span>swift</span>
                <span>java</span>
            </section>
            <section
                className={"skills-subsection"}
                role={"contentinfo"}
                aria-label="Library"
            >
                <h3>LIBRARY</h3>
                <span>react.js</span>
            </section>
            <section
                className={"skills-subsection"}
                role={"contentinfo"}
                aria-label="CSS Preprocessor"
            >
                <h3>CSS PREPROCESSOR</h3>
                <span>sass</span>
            </section>
            <section
                className={"skills-subsection"}
                role={"contentinfo"}
                aria-label="Version Control"
            >
                <h3>VERSION CONTROL</h3>
                <span>git</span>
            </section>
        </section>
    );
}
