import "../styles/Contacts.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import website from "../assets/website.png";

export default function Contacts() {
    return (
        <section role={"contentinfo"} aria-label="Contacts">
            <h2>Contacts</h2>
            <div>
                <a href="#">
                    <span>massuhcodes@gmail.com</span>
                    <img className="icon" src={mail} />
                </a>
                <a href="#">
                    <span>linkedin/farahmassuh</span>
                    <img className="icon" src={linkedin} />
                </a>
                <a href="#">
                    <span>github/massuhcodes</span>
                    <img className="icon" src={github} />
                </a>
                <a href="#">
                    <span>massuhcodes.com</span>
                    <img className="icon" src={website} />
                </a>
            </div>
        </section>
    );
}
