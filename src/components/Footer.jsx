import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <h1>WTF</h1>
      </div>
      <div className={style.footerSection}>
        <h3>Quick as</h3>
        <a href="">About</a>
        <a href="/">FAQs</a>
        <a href="/">Term & Conditions</a>
        <a href="/">Refund & Cancelation</a>
        <a href="/">Contact</a>
      </div>
      <div className={style.footerSection}>
        <h3>Quick as</h3>
        <a href="/">About</a>
        <a href="/">FAQs</a>
        <a href="/">Term & Conditions</a>
        <a href="/">Refund & Cancelation</a>
        <a href="/">Contact</a>
      </div>
      <div className={style.footerSection}>
        <h3>Quick as</h3>
        <a href="/">About</a>
        <a href="/">FAQs</a>
        <a href="/">Term & Conditions</a>
        <a href="/">Refund & Cancelation</a>
        <a href="/">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
