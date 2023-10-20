import style from "./BenfitsBar.module.css";
import benfitbar from "../assets/benfitBar.jpg";
function BenfitsBar() {
  return (
    <div className={style.benfitbar}>
      <img className={style.benfitbarImg} src={benfitbar} alt="benfit bar" />
    </div>
  );
}

export default BenfitsBar;
