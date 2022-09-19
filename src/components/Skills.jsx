import "../styles/Skills.css";

export default function Skills() {
    return (
        <section role={"contentinfo"} aria-label="Skills">
            <h2>Skills</h2>
            <section role={"contentinfo"} aria-label="Languages">
                <h3>Languages</h3>
                <span>html5</span>
                <span>css3</span>
                <span>javascript</span>
                <span>python</span>
                <span>swift</span>
                <span>java</span>
            </section>
            <section role={"contentinfo"} aria-label="Library">
                <h3>Library</h3>
                <span>react.js</span>
            </section>
            <section role={"contentinfo"} aria-label="CSS Preprocessor">
                <h3>CSS Preprocessor</h3>
                <span>sass</span>
            </section>
            <section role={"contentinfo"} aria-label="Version Controle">
                <h3>Version Control</h3>
                <span>git</span>
            </section>
        </section>
    );
}
