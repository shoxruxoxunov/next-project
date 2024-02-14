import ProductInfo from "./ProductInfo";

async function getData(id) {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();
  return data;
}

async function SingleProduct({ params }) {
  const sigleData = await getData(params.id);

  return <ProductInfo sigleData={sigleData} />;
}

export default SingleProduct;
