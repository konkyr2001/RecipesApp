import Detail from "./Detail";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DetailsContainer({
  iconClass,
  title,
  description,
  from,
  to,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  console.log(iconClass);
  console.log(title);
  console.log(description);
  return (
    <div className="w-full h-full shadow-md bg-white rounded-xl">
      <motion.div
        className="calories-example-text"
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
          <div>
            <Detail
              iconClass={iconClass}
              title={title}
              description={description}
              from={from}
              to={to}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
