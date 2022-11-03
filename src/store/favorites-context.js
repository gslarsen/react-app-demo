import { createContext, useState } from "react";
// the object created by createContext() contains a react component, so use TitleCase for object name; createContext parameter is the initial value for the app or component state. It can be any value required.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const context = {};
  // Provider is a component that's built-in; whenever the value attribute changes, all components listening to our context will be updated
  return (
    <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
  );
}
