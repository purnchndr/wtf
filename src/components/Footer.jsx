import { Link } from "react-router-dom";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <h1>WTF</h1>
      </div>
      <div className={style.footerSection}>
        <h3>Quick Links</h3>
        <Link to="">About</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">Term & Conditions</Link>
        <Link to="/">Refund & Cancelation</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className={style.footerSection}>
        <h3>Explore</h3>
        <Link to="/">Arenas</Link>
        <Link to="/">Studios</Link>
        <Link to="/">Nutritions</Link>
        <Link to="/">Personal Trainer</Link>
      </div>
      <div className={style.footerSection}>
        <h3>Contact</h3>
        <Link to="/">📌 Delhi, Uttam Nagar Uttam Nagar East</Link>
        <Link to="/">📌 Noida, Some address 1 some address2</Link>

        <Link to="/">📞 9999999999</Link>
        <Link to="/">✉️ info@gmail.com</Link>
      </div>
    </footer>
  );
}

export default Footer;
