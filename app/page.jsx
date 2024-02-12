"use client";

import Products from "./components/Products";

 export async function getData() {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return data;
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="container">
      <h1 className="font-light text-base sm:font-normal sm:text-lg md:font-medium md:text-2xl lg:font-semibold lg:text-3xl mb-4 mt-4">
        Products
      </h1>
      <Products products={data}/>
    </main>
  );
}
