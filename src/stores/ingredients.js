import { legacy_createStore } from "redux";

const initialState = {
  ingredients: [],
  onlyIngredients: false,
  calories: {
    from: 200,
    to: 1000,
  },
  protein: {
    set: true,
    value: 20,
  },
  isSet: false,
};

// Define the reducer function
const ingredientsReducer = (state = initialState, action) => {
  // console.log("Mpike ingredients Reducer");
  if (action.type === "SUBMIT_BUTTON") {
    let ingredientsValue = [];
    action.payload.ingredients.map((ingredient) => {
      ingredientsValue.push(ingredient.value);
    });
    return {
      ingredients: ingredientsValue,
      onlyIngredients: action.payload.onlyIngredients,
      calories: action.payload.calories,
      protein: action.payload.protein,
    };
  }
  // Default case: return the current state
  return state;
};

// Create the Redux store with the reducer
// const store = legacy_createStore(ingredientsReducer);

// Export the store
export default ingredientsReducer;
