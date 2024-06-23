import Detail from "./Detail";
import { useRef } from "react";

export default function DetailsContainer({
  image,
  title,
  description,
  from,
  to,
}) {
  return (
    <div className="w-full h-full shadow-md rounded-xl bg-blue-300">
      <div
        className="calories-example-text h-full"
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        // ref={ref}
        // transition={{ duration: 1 }}
        // variants={{
        //   visible: { opacity: 1, scale: 1 },
        //   hidden: { opacity: 0, scale: 0 },
        // }}
      >
        <Detail
          image={image}
          title={title}
          description={description}
          from={from}
          to={to}
        />
      </div>
    </div>
  );
}
