import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Recipe from "../Recipe/Recipe";
import RecipesHeader from "../RecipesHeader";
import Loading from "../Loading";
import RecipesNotFound from "../RecipesNotFound/RecipesNotFound";

import "./css/RecipesLight.css";
import "./css/RecipesDark.css";

const appId = "b0a6bde2";
const appKey = "0c6ae1f5e2cfcf08b3445468e5be3fae";

function sortRecipeBy(a, b, sortValue, sortBy) {
  let valueA;
  let valueB;
  if (sortBy === "calories") {
    valueA = a.recipe.totalNutrients.ENERC_KCAL.quantity / a.recipe.yield;
    valueB = b.recipe.totalNutrients.ENERC_KCAL.quantity / b.recipe.yield;
  } else if (sortBy === "protein") {
    valueA = a.recipe.totalNutrients.PROCNT.quantity / a.recipe.yield;
    valueB = b.recipe.totalNutrients.PROCNT.quantity / b.recipe.yield;
  }

  if (sortValue === "asc") {
    return valueA - valueB;
  } else if (sortValue === "desc") {
    return valueB - valueA;
  }
}

export default function Recipes() {
  const ingredients = useSelector((state) => state.ingredientStore.ingredients);
  const calories = useSelector((state) => state.ingredientStore.calories);
  const protein = useSelector((state) => state.ingredientStore.protein);
  const onlyIngredients = useSelector(
    (state) => state.ingredientStore.onlyIngredients
  );
  const isSet = useSelector((state) => state.ingredientStore.isSet);

  const [data, setData] = useState({
    hits: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);
  const [sortValue, setSortValue] = useState("asc");
  const [sortBy, setSortBy] = useState("calories");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let link = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&random=true`; // default

        if (ingredients.length > 0) {
          link += `&q=${ingredients}`; // put the ingredients
        }

        if (onlyIngredients) {
          link += `&ingr=${ingredients.length}`; //
        } else {
          link += "&ingr=10"; // until 10 ingredients
        }

        if (protein.set) {
          link += `&nutrients%5BPROCNT%5D=${protein.value}%2B`;
        }

        link += `&calories=${calories.from}-${calories.to}`;

        let response;
        try {
          response = await fetch(link);
        } catch (error) {
          console.log(`Error with link: ${link}`);
        }

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setRefresh(false);
        if (jsonData.hits.length === 0) {
          setNotFound(true);
          return;
        }
        setNotFound(false);
        setData(jsonData);
      } catch (error) {
        setRefresh(false);
        setError(error);
      } finally {
        setRefresh(false);
        setIsLoading(false);

        // on page reload isSet = false so dont move the page
        if (isSet) {
          const element = document.getElementById("recipes-section");
          element.scrollIntoView(element, {
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    setIsLoading(true);
    fetchData();
  }, [ingredients, onlyIngredients, protein, calories, refresh]);

  function handleRefresh() {
    setRefresh(true);
  }

  return (
    <div
      className="recipes-section-lightMode section w-full recipes-container pb-14 relative"
      id="recipes-section"
    >
      {notFound && (
        <>
          <RecipesNotFound setNotFound={setNotFound} />
        </>
      )}
      {isLoading && <Loading />}
      {error && (
        <>
          <RecipesNotFound setNotFound={setNotFound} />
        </>
      )}
      {data.hits.length > 0 && (
        <>
          <RecipesHeader
            className="recipes-header mt-7 mb-0 mr-12 float-right"
            handleRefresh={handleRefresh}
            setSortValue={setSortValue}
            setSortBy={setSortBy}
          />
          <ul
            className="w-full px-12 py-5 flex flex-wrap items-start gap-x-11 justify-center font-Recursive"
            id="recipes-list"
          >
            {data.hits
              .sort((a, b) => sortRecipeBy(a, b, sortValue, sortBy))
              .map((data, index) => {
                const caloriesPerServing = Math.round(
                  data.recipe.totalNutrients.ENERC_KCAL.quantity /
                    data.recipe.yield
                );
                const proteinPerServing = Math.round(
                  data.recipe.totalNutrients.PROCNT.quantity / data.recipe.yield
                );
                const carbsPerServing = Math.round(
                  data.recipe.totalNutrients.CHOCDF.quantity / data.recipe.yield
                );
                return (
                  <Recipe
                    key={index}
                    title={data.recipe.label}
                    imgUrl={data.recipe.images.REGULAR.url}
                    calories={caloriesPerServing}
                    protein={proteinPerServing}
                    url={data.recipe.url}
                    ingredients={data.recipe.ingredients.length}
                    idLink={data._links.self.href}
                    mealType={data.recipe.mealType}
                    dietLabels={data.recipe.dietLabels}
                  />
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
}

// APP ID = b0a6bde2
// APPLICATION KEY = 0c6ae1f5e2cfcf08b3445468e5be3fae
