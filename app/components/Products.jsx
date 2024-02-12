import Link from "next/link";

function Products({ products }) {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-5 md:grid grid-cols-2 md:gap-5   ">
      {products.products.map((prod) => {
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
              <Link
                href={`/product/${prod.id}`}
                className="btn btn-outline btn-secondary lg:btn lg:btn-outline lg:btn-secondary md::btn md:btn-outline md:btn-secondary sm:btn sm:btn-outline sm:btn-secondary text-xs sm:text-sm md:text-base lg:text-lg font-light sm:font-normal md:font-medium lg:font-semibold"
              >
                Go to product
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
