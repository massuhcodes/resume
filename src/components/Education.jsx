import "../styles/Education.css";

export default function Education() {
    return (
        <section role={"contentinfo"} aria-label="Education">
            <h2>Education</h2>
            <section
                role={"contentinfo"}
                aria-label="The Frontend Developer Career Path Certificate"
            >
                <span>
                    Scrimba | <time>Sept '22</time>
                </span>
                <i>The Frontend Developer Career Path Certificate</i>
            </section>
            <section role={"contentinfo"} aria-label="Engineering Science A.S.">
                <span>
                    HCCC | <time>Dec '22</time>
                </span>
                <i>Engineering Science A.S.</i>
            </section>
        </section>
    );
}
