import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <h1>WTF</h1>
      </div>
      <div className={style.footerSection}>
        <h3>Quick Links</h3>
        <a href="">About</a>
        <a href="/">FAQs</a>
        <a href="/">Term & Conditions</a>
        <a href="/">Refund & Cancelation</a>
        <a href="/">Contact</a>
      </div>
      <div className={style.footerSection}>
        <h3>Explore</h3>
        <a href="/">Arenas</a>
        <a href="/">Studios</a>
        <a href="/">Nutritions</a>
        <a href="/">Personal Trainer</a>
      </div>
      <div className={style.footerSection}>
        <h3>Contact</h3>
        <a href="/">📌 Delhi, Uttam Nagar Uttam Nagar East</a>
        <a href="/">📌 Noida, Some address 1 some address2</a>

        <a href="/">📞 9999999999</a>
        <a href="/">✉️ info@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
