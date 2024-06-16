import "./Welcome.css";
export default function Welcome() {

  return <div
    id="welcome-section"
    className="w-full h-[100vh] flex justify-center items-center relative">
    <div className="welcome-section-background absolute rounded-bl-[70%] rounded-br-[70%] top-0 z-0"></div>
    <div className="min-w-[80%] h-4/5 z-10">
      <h1 className="text-4xl font-semibold font-Montserrat">Find the recipes <br></br> that suits best for you!</h1>
      <h1 className="mix-title text-4xl font-Montserrat">Taste the Joy of Cooking!</h1>
      <p className="text-xl text-slate-500 font-Montserrat mt-5">
        Dive into a collection of recipes that are designed <br/>
        to delight your taste buds and fuel your body. <br/>
        Enjoy the perfect balance of flavor and nutrition in every dish.
        <br/><span className="text-slate-800 font-medium">Eat well, live well!</span></p>
    </div>
  </div>
}