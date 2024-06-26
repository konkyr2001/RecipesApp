import favoriteStore from "./favorites";
import ingredientStore from "./ingredients";
import { combineReducers, legacy_createStore } from "redux";

const combine = combineReducers({
  ingredientStore,
  favoriteStore,
});

const store = legacy_createStore(combine);

export default store;
