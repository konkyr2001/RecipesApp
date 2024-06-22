import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Favorites.css";

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteStore.favoriteRecipes);
  const dispatch = useDispatch();

  const [showFavorites, setShowFavorites] = useState(false);

  const divRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    window.onclick = (event) => {
      if (showFavorites) {
        if (
          !divRef.current.contains(event.target.parentNode) &&
          !modalRef.current.contains(event.target)
        ) {
          console.log("mpike");
          setShowFavorites(false);
        }
      }
    };
  }, [showFavorites]);

  function handleButton() {
    setShowFavorites((prevState) => !prevState);
  }

  function handleRemoveItem(event, title) {
    // event.preventDefault();
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: {
        title,
      },
    });
  }

  return (
    <div
      className="relative z-20"
      style={{
        fontFamily: "Quicksand, sans-serif",
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <motion.button
        onClick={handleButton}
        ref={divRef}
        className="relative"
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
      >
        <i className="fa-solid fa-heart text-[25px] text-red-500 z-10 relative"></i>
        {favorites.length > -1 && (
          <p className="absolute top-3 left-3 z-20 rounded-[50%] bg-slate-300 w-5 h-5 text-center p-0 m-0 flex items-center justify-center">
            {favorites.length}
          </p>
        )}
      </motion.button>

      <motion.div
        variants={{
          open: { scale: 1, opacity: 1 },
          closed: { scale: 0, opacity: 0 },
        }}
        animate={showFavorites ? "open" : "closed"}
        className="absolute bg-slate-400 rounded-[20px] min-w-[200px] w-auto max-w-[400px] mt-10 z-20 px-1 -right-20  max-h-[470px]"
        ref={modalRef}
      >
        <div className="triangle bg-transparent border-b-slate-400 absolute right-[78px] -top-8 border-[17px] after:border-none"></div>
        {favorites.length === 0 ? (
          <p className="text-center w-2/3 mx-auto my-6 text-sm">
            No favourite recipes found yet
          </p>
        ) : (
          <ul className="favorites-box px-2 w-full flex flex-col mb-1 overflow-y-auto max-h-[470px]">
            {favorites.map((favorite, index) => (
              <li
                key={index}
                className="min-w-[350px] w-auto flex items-center space-x-2 my-2"
              >
                <a
                  href={favorite.url}
                  target="_blank"
                  className="min-w-[100px] h-[100px] rounded-md"
                >
                  <img
                    alt="Recipe image"
                    src={favorite.imgUrl}
                    className="w-full h-full rounded-md"
                  />
                </a>
                <div className="inline-block flex-row w-full">
                  <p className="w-full">{favorite.title}</p>
                  <div className="w-full border-[1px] border-gray-400 border-solid"></div>
                  <ul className="w-full mt-2">
                    <li className="inline-block">
                      <p>
                        <i
                          className="fa-solid fa-fire-flame-simple text-red-400 m-0"
                          title="Calories per 100gr"
                        >
                          <span className="ml-1">{favorite.calories}</span>
                        </i>
                      </p>
                    </li>
                    <li className="ml-5 inline-block">
                      <p>
                        <i
                          className="fa-solid fa-dumbbell m-0"
                          title="Protein per 100gr"
                          style={{ color: favorite.proteinColor }}
                        >
                          <span className="ml-1">{favorite.protein}</span>
                        </i>
                      </p>
                    </li>
                    <li className="ml-5 inline-block">
                      <p>
                        <i
                          className="fa-solid fa-clock m-0 text-neutral-600"
                          title="Protein per 100gr"
                        >
                          <span className="ml-1">{favorite.time}</span>
                        </i>
                      </p>
                    </li>
                    <li className="inline-block float-right">
                      <motion.button
                        onClick={(e) => handleRemoveItem(e, favorite.title)}
                        className="p-0 m-0"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        title="Remove from favorite list"
                      >
                        <i className="fa-solid fa-heart text-red-500 float-right text-[22px]"></i>
                      </motion.button>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
