import { NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

function Header({ backbutton }) {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.navLogo}>
          {backbutton ? (
            <span className={style.backbutton} onClick={() => navigate(-1)}>
              ⬅️
            </span>
          ) : null}
          <h1 className={style.navtext}>WTF</h1>
        </div>

        <div className={style.navlinks}>
          <NavLink className={style.selected} to="/">
            Fitness
          </NavLink>
          <NavLink to="/">Nutritions</NavLink>
          <NavLink to="/">Live Class</NavLink>
          <NavLink to="/">Become WTF Partener</NavLink>
          <NavLink to="/">Login</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
