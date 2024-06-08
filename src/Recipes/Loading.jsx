import PacmanLoader from "react-spinners/PacmanLoader";

function Loading() {
  return (
    <div className="sweet-loading fixed top-1/2 left-1/2 transform -translate-x-[48%] -translate-y-1/2 z-20">
      <PacmanLoader
        color={"#0089cc"}
        loading={true}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={2}
      />
    </div>
  );
}

export default Loading;
