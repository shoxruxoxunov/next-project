async function getData(id) {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();
  return data;
}

async function SingleProduct({ params }) {
  const sigleData = await getData(params.id);

  return (
    <div className="grid h-screen w-full place-items-center gap-5 lg:flex lg:justify-between lg:gap-[100px]  lg:container">
      <div className="carousel carousel-center max-w-xs lg:max-w-2xl p-4 space-x-4 bg-neutral rounded-box ">
        {sigleData.images.map((image) => {
          return (
            <div className="carousel-item">
              <img key={image}
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
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
