import Detail from "./Detail";

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
