

function NotFound() {
  return (
    <div className="container grid grid-cols-2 h-screen w-full place-items-center">
      <div>
        <h1 className="lg:font-bold lg:text-3xl  font-light text-sm text-red-700">
          NotFound
        </h1>
      </div>
      <div className="lg:btn-lg lg:btn-error btn btn-error text-sm font-light">
        <a className="" href="/">
          Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
