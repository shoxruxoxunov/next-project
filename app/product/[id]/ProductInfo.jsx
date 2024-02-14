"use client";
import { useDispatch } from "react-redux";
import { addToCard, delelteProducts } from "@/app/redux/StoreSlice";
function ProductInfo({ sigleData }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        key={sigleData.id}
        className="grid h-screen w-full place-items-center gap-5 lg:flex lg:justify-between lg:gap-[100px]  lg:container"
      >
        <div className="carousel carousel-center max-w-xs lg:max-w-2xl p-4 space-x-4 bg-neutral rounded-box ">
          {sigleData.images.map((image) => {
            return (
              <div key={sigleData.id} className="carousel-item">
                <img
                  key={image}
                  className=" rounded-box object-cover w-full h-[200px]"
                  src={image}
                  alt="Burger"
                />
              </div>
            );
          })}
        </div>
        <div className="card w-[350px]  bg-base-100 shadow-xl ">
          <div className="card-body">
            <div>
              <h2 className="card-title font-light sm:font-normal md:font-medium lg:font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                {sigleData.title}
              </h2>
            </div>
            <div>
              <p className="badge badge-outline font-light sm:font-normal md:font-medium lg:-font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                {sigleData.category}
              </p>
            </div>
            <div className="badge badge-outline font-light sm:font-normal md:font-medium lg:-font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
              {sigleData.price} $
            </div>
            <div>
              <p className="badge badge-outline font-light sm:font-normal md:font-medium lg:-font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                {sigleData.brand}
              </p>
            </div>
            <div>
              <p className="font-light sm:font-normal md:font-medium lg:font-semibold text-xs sm:text-sm md:text-base lg:text-base w-full">
                {sigleData.description}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => dispatch(addToCard({ ...sigleData, amount: 1 }))}
                className="btn btn-info md:btn-md"
              >
                Add to cart
              </button>
              <button
                className="btn btn-error md:btn-md"
                onClick={() =>
                  dispatch(delelteProducts({ ...sigleData, amount: -1 }))
                }
              >
                Put away
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
