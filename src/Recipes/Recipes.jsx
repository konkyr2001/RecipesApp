import "./Recipes.css";
import Recipe from "./Recipe";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import SortingMenu from "../SortingMenu/SortingMenu";
import Loading from "./Loading";
import RecipesNotFound from "./RecipesNotFound";
import RefreshRecipes from "./RefreshRecipes";
import Links from "../Links/Links";

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

  const errorModalRef = useRef();

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
          console.log(link);
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
          // errorModalRef.current.openModal();
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
          element.scrollIntoView(
            element,
            {
              behavior: "smooth",
              block: "start",
            },
            {
              // duration: 5000, // aprox. the duration that chrome uses,
            }
          );
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
      // className="h-[90%] w-3/4 px-[30px] rounded-[10px] recipes-container mt-[30px]"
      className="section w-full px-[30px] rounded-[10px] recipes-container"
      id="recipes-section"
    >
      {notFound && (
        <RecipesNotFound ref={errorModalRef} setNotFound={setNotFound} />
      )}
      {isLoading && <Loading />}
      {error && (
        <>
          <RecipesNotFound ref={errorModalRef} setNotFound={setNotFound} />
          <h1 className="bg-red-500 h-[500px]">THIS IS AN ERROR </h1>
        </>
      )}
      {data.hits.length > 0 && (
        <>
          <Links />

          <div className="mb-[15px] float-right">
            <RefreshRecipes handleRefresh={handleRefresh} />
            <SortingMenu setSortValue={setSortValue} setSortBy={setSortBy} />
          </div>
          <ul className="recipes-list w-full grid gap-x-0 gap-y-5 justify-items-center font-Recursive">
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
                    imgUrl={data.recipe.images.SMALL.url}
                    time={data.recipe.totalTime}
                    servings={data.recipe.yield}
                    calories={caloriesPerServing}
                    protein={proteinPerServing}
                    carbs={carbsPerServing}
                    url={data.recipe.url}
                    ingredients={data.recipe.ingredients}
                    idLink={data._links.self.href}
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
