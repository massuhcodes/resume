import "../styles/Work.css";

export default function Work() {
    return (
        <section
            className={"section-work"}
            role={"contentinfo"}
            aria-label={"Work Experience"}
        >
            <h2>WORK EXPERIENCE</h2>
            <div>
                <h3>Bank of America, New York, NY</h3>
                <time>Jan '22 – Jun '22</time>
            </div>
            <i>Relationship Banker</i>
            <ul>
                <li>
                    Effectively worked with a dedicated team by explaining about
                    the attractive benefits of personal and business accounts to
                    out customers, leading to an increase in teller referals
                </li>
            </ul>
        </section>
    );
}
