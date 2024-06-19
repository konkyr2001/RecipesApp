import Detail from "./Detail";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DetailsContainer({
  image,
  title,
  description,
  from,
  to,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="w-full h-full shadow-md rounded-xl bg-blue-300">
      <motion.div
        className="calories-example-text h-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {inView && (
          <Detail
            image={image}
            title={title}
            description={description}
            from={from}
            to={to}
          />
        )}
      </motion.div>
    </div>
  );
}
