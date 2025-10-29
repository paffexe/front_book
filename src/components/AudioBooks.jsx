import data from "../data/products2";
import star from "../assets/star.svg";
import headphone from "../assets/headphone.svg";

const AudioBooks = () => {
  return (
    <div className="container py-16">
      <h2 className="mb-8 text-[32px] leading-10">Аудио китоблар</h2>
      <div className="flex justify-between gap-6 items-center">
        {data.map((item) => (
          <div key={item.id} className=" w-60 ">
            <div>
              <div>
                <img src={item.img} alt="img" className="rounded-2xl" />
              </div>
              <h2 className="mt-[18px] mb-3 font-bold text-[20px] leading-[100%]">
                {item.title}
              </h2>
              <p className="text-[14px] leading-[100%] text-[#3F51B5] mb-4 uppercase">
                {item.genre}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={star} alt="" />
                  <span className="font-bold text-[18px] leading-[100%] text-[#FF7F4D]">
                    {item.rating}
                  </span>
                </div>
                <div>
                  <img src={headphone} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioBooks;
