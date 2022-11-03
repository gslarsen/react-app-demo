import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(meetup) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(meetup.id);

  function toggleFavoriteStatusHandler() {
    const itemInLocalStorage = JSON.parse(
      localStorage.getItem("myFavorites")
    ).some((el) => el.id === meetup.id);

    if (itemIsFavorite || itemInLocalStorage) {
      favoritesContext.removeFavorite(meetup.id);
      const myFavorites = JSON.parse(localStorage.getItem("myFavorites"));
      const revisedMyFavorites = myFavorites.filter(
        (el) => el.id !== meetup.id
      );
      localStorage.setItem("myFavorites", JSON.stringify(revisedMyFavorites));
    } else {
      favoritesContext.addFavorite({
        ...meetup,
      });
      if (!itemInLocalStorage) {
        const myFavorites = JSON.parse(localStorage.getItem("myFavorites"));
        myFavorites.push({ ...meetup });
        localStorage.setItem("myFavorites", JSON.stringify(myFavorites));
      }
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {JSON.parse(localStorage.getItem("myFavorites")).some(
              (el) => el.id === meetup.id
            )
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
