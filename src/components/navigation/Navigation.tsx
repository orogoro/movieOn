// import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/iconLogo.png";

import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.containerLogo}>
          <img className={styles.image} src={logo} alt="logo" />
          <div className={styles.textLogo}>
            Movie<span className={styles.spanLogo}>ON</span>
          </div>
        </div>
        <div className={styles.container}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Movies"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Movies
          </NavLink>
        </div>

        <div className={styles.container}>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              [styles.link, styles.singIn, isActive ? styles.activeLink : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Login
          </NavLink>
        </div>

        {/* <div className={styles.burger}>
          <button
            className={styles.button}
            onClick={() => setModalActive(true)}
          >
            <img
              className={styles.imgB}
              src={mobileBurger}
              alt="mobileBurger"
            />
          </button>
        </div> */}
      </nav>
      {/* <MobileModal active={modalActive} setActive={setModalActive} /> */}
    </header>
  );
};

export default Navigation;
