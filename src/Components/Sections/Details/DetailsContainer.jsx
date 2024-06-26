import Detail from "./Detail";
import { motion } from "framer-motion";

export default function DetailsContainer({
  image,
  title,
  description,
  from,
  to,
  delay,
}) {
  return (
    <motion.div
      className={`w-full h-full shadow-md rounded-xl bg-blue-300`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay }}
      variants={{
        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        hidden: { opacity: 0, x: "-100%", filter: "blur(5px)" },
      }}
    >
      <div className="calories-example-text h-full">
        <Detail
          image={image}
          title={title}
          description={description}
          from={from}
          to={to}
        />
      </div>
    </motion.div>
  );
}
