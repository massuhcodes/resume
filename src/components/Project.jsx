import "../styles/Project.css";

export default function Project() {
    return (
        <section role={"contentinfo"} aria-label={"Project"}>
            <h2>Project</h2>
            <div>
                <h3>Awedbeen.com</h3>
                <time>Aug '22</time>
            </div>
            <span>
                A React.js website where users create posts of places they
                visited
            </span>
            <ul>
                <li>Made user-friendly by implementing CRUD capabilities</li>
                <li>LocalStorage applied to persist user-data</li>
                <li>
                    RESTful through the use of the `insert name here` API to
                    make mock posts
                </li>
                <li>
                    Implemented React's useState in order to maintain app's data
                    and logic
                </li>
                <li>
                    Dark/Light mode themes provided to enhance user-experience
                    through React's useContext hook
                </li>
                <li>
                    Responsive layout achieved for the accomodation of desktop,
                    tablet, and mobile screens through the use of flexbox, grid,
                    and media queries
                </li>
                <li>
                    Accessibility accomplished in order to yield optimal
                    user-experience
                </li>
            </ul>
        </section>
    );
}
