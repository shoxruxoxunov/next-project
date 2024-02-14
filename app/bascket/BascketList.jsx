"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "../redux/StoreSlice";

function BascketList() {
  const { allProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  if (allProducts.length == 0) {
    return (
      <h1 className=" font-light text-sm md:text-lg md:font-semibold lg:text-xl lg:font-bold container grid h-screen w-full place-items-center">
        You dont have any products
      </h1>
    );
  }
  return (
    <div className="mt-[30px] container lg:grid lg:grid-cols-3 gap-5 md:grid grid-cols-2 md:gap-5">
      {allProducts.map((prod) => {
        return (
          <div
            key={prod.id}
            className="card  lg:w-96 w-[350px] sm:w-50 md:w-72 bg-base-100 shadow-xl mb-5"
          >
            <figure>
              <img
                className="lg:h-[220px] lg:w-[400px] h-[170px] w-[350px] sm:h-[100px]sm:w-[130px] md:h-[150px] md:w-[300px] object-cover"
                src={prod.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div
                className="lg:flex lg:items-center lg:gap-4 flex items-center gap-4
            md:flex md:gap-4 md:items-center"
              >
                <h2 className="card-title font-light sm:font-normal md:font-medium lg:font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  {prod.title}
                </h2>
                <div className="badge badge-secondary font-thin sm:font-normal md:font-medium lg:font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  NEW
                </div>
              </div>
              <p className="font-light sm:font-normal md:font-medium lg:font-bold text-xs sm:text-sm md:text-base lg:text-lg w-full">
                {prod.description}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline font-light sm:font-normal md:font-medium lg:-font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  {prod.category}
                </div>
                <div className="badge badge-outline font-light sm:font-normal md:font-medium lg:-font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  {prod.brand}
                </div>
              </div>
              <div>
                <p className="font-light sm:font-normal md:font-medium lg:font-bold text-xs sm:text-sm md:text-base lg:text-lg w-full">
                  {prod.amount}-pieces
                </p>
              </div>
              <div className="flex justify-between gap-3 mt-1">
                <button
                  onClick={() => dispatch(incrementProduct(prod.id))}
                  className="btn md:btn-md lg:btn-lg btn-outline"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrementProduct(prod.id))}
                  className="btn md:btn-md lg:btn-lg btn-warning"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeProduct(prod.id))}
                  className="btn md:btn-md lg:btn-lg btn-error"
                >
                  Delete
                </button>
              </div>
              <div>{prod.price}$</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BascketList;
