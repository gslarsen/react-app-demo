import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);
  const localStorageFavorites = JSON.parse(localStorage.getItem("myFavorites"));

  return (
    <header className={classes.header}>
      <p className={classes.logo}>Meetups</p>
      <nav>
        <ul>
          <li>
            <Link to="/" alt="link to all meetups">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" alt="link to new meetup">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites" alt="link to my favorites">
              My Favorites
              <span className={classes.badge}>
                {localStorageFavorites.length !== 0
                  ? localStorageFavorites.length
                  : favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
