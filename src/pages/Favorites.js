import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  const localStorageFavorites = JSON.parse(localStorage.getItem('myFavorites'));
  const localStorageFavoritesLength = localStorageFavorites.length;
  return (
    <section>
      <h1>My Favorites</h1>
      {localStorageFavoritesLength === 0 ? <h3>You don't have any favorites yet...</h3> : null}
      <MeetupList meetups={localStorageFavoritesLength !== 0 ? JSON.parse(localStorage.getItem("myFavorites")) : favoritesContext.favorites} />
    </section>
  );
}

export default FavoritesPage;
