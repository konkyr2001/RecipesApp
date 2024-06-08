import "./SortingMenu.css";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function SortingMenu({ setSortValue, setSortBy }) {
  const [visibility, setVisibility] = useState(false);
  const sortingRef = useRef();
  const buttonRef = useRef();
  const iRef = useRef();

  useEffect(() => {
    window.onclick = (event) => {
      if (visibility) {
        if (
          !sortingRef.current.contains(event.target) &&
          event.target != buttonRef.current &&
          event.target != iRef.current
        ) {
          setVisibility(false);
        }
      }
    };
  }, [visibility]);

  function handleVisibility() {
    setVisibility((prevState) => !prevState);
  }

  function setSorting(value, by) {
    setSortValue(value);
    setSortBy(by);
  }
  return (
    <motion.nav
      initial={false}
      animate={visibility ? "open" : "closed"}
      className="sorting-menu relative z-10 float-right button-cursor text-[18px]"
    >
      <motion.button
        whileTap={{ scale: 0.8 }}
        className="p-0.5"
        onClick={handleVisibility}
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
      >
        Sort By
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          className={`fa-solid fa-caret-down ml-2`}
          ref={iRef}
        ></motion.div>
      </motion.button>
      <motion.ul
        className="bg-cyan-200 absolute w-[200px] z-10 right-0 rounded flex flex-col justify-center"
        animate={visibility ? "open" : "closed"}
        ref={sortingRef}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <motion.li variants={itemVariants}>
          <a
            onClick={() => setSorting("asc", "calories")}
            className="sorting-link"
            role="menuitem"
            tabIndex={0}
          >
            Calories Lowest
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            onClick={() => setSorting("desc", "calories")}
            className="sorting-link"
            role="menuitem"
            tabIndex={0}
          >
            Calories Highest
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          {" "}
          <a
            onClick={() => setSorting("asc", "protein")}
            className="sorting-link"
            role="menuitem"
            tabIndex={0}
          >
            Protein Lowest
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            onClick={() => setSorting("desc", "protein")}
            className="sorting-link"
            role="menuitem"
            tabIndex={0}
          >
            Protein Highest
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
