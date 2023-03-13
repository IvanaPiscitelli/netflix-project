import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const navItem = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Tv Show", link: "/tv-show" },
    { id: 3, name: "Movie", link: "/movies" },
    { id: 4, name: "My List", link: "/my-list" },
  ];
  return (
    <header>
      <div className={style.logo}>
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/230310/2ded9cd4f91357c71a6d7b7e489d0287.png"
            alt="netflix-font"
            border="0"
          />
        </a>
      </div>

      <ul className={style["navigation-list"]}>
        {navItem.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
