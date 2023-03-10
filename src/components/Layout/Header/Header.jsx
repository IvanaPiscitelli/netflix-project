import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.logo}>
        <a href="https://fontmeme.com/netflix-font/">
          <img
            src="https://fontmeme.com/permalink/230310/2ded9cd4f91357c71a6d7b7e489d0287.png"
            alt="netflix-font"
            border="0"
          />
        </a>
      </div>

      <ul className={style.choice}>
        <li>
          <a href="http://">Home</a>
        </li>
        <li>
          <a href="http://">Tv Show</a>
        </li>
        <li>
          <a href="http://">Movies</a>
        </li>
        <li>
          <a href="http://">My List</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
