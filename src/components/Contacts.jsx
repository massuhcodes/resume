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
                    <img
                        className="icon"
                        src={mail}
                        alt={"Farah Massuh's e-mail"}
                    />
                </a>
                <a href="#">
                    <span>linkedin/farahmassuh</span>
                    <img
                        className="icon"
                        src={linkedin}
                        alt={"Farah Massuh's LinkedIn"}
                    />
                </a>
                <a href="#">
                    <span>github/massuhcodes</span>
                    <img
                        className="icon"
                        src={github}
                        alt={"Farah Massuh's GitHub"}
                    />
                </a>
                <a href="#">
                    <span>massuhcodes.com</span>
                    <img
                        className="icon"
                        src={website}
                        alt={"Farah Massuh's website"}
                    />
                </a>
            </div>
        </section>
    );
}
