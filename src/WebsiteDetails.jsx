import DetailsContainer from "./DetailsContainer";

export default function WebsiteDetails() {
  return (
    <div
      id="website-details-section"
      className="relative w-[full] h-[70vh] flex justify-center items-center border-solid border-t-2 border-black"
    >
      <ul className="w-full flex justify-center items-center gap-5">
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            iconClass={"fa-solid fa-fire-flame-simple text-red-400"}
            title={"Calories"}
            description={"Set the desired calories for your meals"}
            from={0}
            to={1000}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            iconClass={"fa-solid fa-bolt text-yellow-400"}
            title={"Protein"}
            description={"Set the desired calories for your meals"}
            from={0}
            to={1000}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            iconClass={"fa-solid fa-fire-flame-simple"}
            title={"Calories"}
            description={"Set the desired calories for your meals"}
            from={0}
            to={1000}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            iconClass={"fa-solid fa-fire-flame-simple"}
            title={"Calories"}
            description={"Set the desired calories for your meals"}
            from={0}
            to={1000}
          />
        </li>
      </ul>
    </div>
  );
}
