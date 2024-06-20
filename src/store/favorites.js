import { legacy_createStore } from "redux";

const initialState = {
  favoriteRecipes: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

const favoritesReducer = (state = initialState, action) => {
  if (action.type === "ADD_FAVORITE") {
    const newArr = [...state.favoriteRecipes, action.payload];
    localStorage.setItem("favorites", JSON.stringify(newArr));
    return {
      ...state,
      favoriteRecipes: newArr,
    };
  } else if (action.type === "REMOVE_FAVORITE") {
    const removedArr = state.favoriteRecipes.filter(
      (element) => element.title !== action.payload.title
    );
    localStorage.setItem("favorites", JSON.stringify(removedArr));
    return {
      ...state,
      favoriteRecipes: removedArr,
    };
  }

  return state;
};

// const store = legacy_createStore(favoritesReducer);

export default favoritesReducer;
