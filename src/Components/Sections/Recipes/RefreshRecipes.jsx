import { useState } from "react";
import { motion } from "framer-motion";

export default function RefreshRecipes({ handleRefresh }) {
  const [rotation, setRotation] = useState(0);

  function handleClick() {
    setRotation((prevRotation) => prevRotation + 360);
    handleRefresh();
  }

  return (
    <motion.button
      onClick={handleClick}
      animate={{ rotate: rotation }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
      transition={{
        scale: { duration: 0.2 },
        rotate: { duration: 1, ease: "easeInOut" },
      }}
      className="mr-10"
    >
      <i className="fa-solid fa-arrows-rotate text-[18px] pt-2"></i>
    </motion.button>
  );
}
