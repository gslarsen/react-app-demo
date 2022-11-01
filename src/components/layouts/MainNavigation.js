import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>React Meetups</p>
      <nav>
        <ul>
          <li>
            <Link to="/" alt="link to all meetups">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/favorites" alt="link to my favorites">
              My Favorites
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" alt="link to new meetup">
            Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
