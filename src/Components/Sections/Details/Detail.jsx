export default function Detail({ image, title, description }) {

  return (
    <div className="details rounded-xl font-Montserrat flex flex-col  items-center h-full pt-[40px] pb-[10px] xl:pt-[40px] xl:justify-center">
      <div className="w-full flex justify-center items-center h-1/3">
        <img
          className="p-1 cursor-default rounded-[50%] bg-slate-300 outline-[5px] outline-slate-100 outline cursorPointer w-[90px] xl:w-[110px]"
          src={image}
          alt="img"
        />
      </div>

      <div className="text-center text-xl flex justify-center items-center mt-[36px] mb-[25px] xl:text-2xl xl:h-1/3">
        <h3 className=" text-slate-100 drop-shadow-2xl">{title}</h3>
      </div>

      <div className="text-base text-slate-100 px-2 text-center xl:text-lg xl:1/3 xl:px-10">
        <p>{description}</p>
      </div>
    </div>
  );
}
