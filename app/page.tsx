import Carousel from "@/components/carousel";

const fetchProducts = async () => {
  try {
    let res = await fetch("http://localhost:3000/api");
    if (!res.ok) throw new Error("FETCHING_PRODUCTS_HAS_FAILED");
    let data = await res.json();
    return data;
  } catch (error) {
    console.error("[PRODUCTS_FETCHING_FAILED]", error);
  }
};

const Home = async () => {
  let data = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <h1 className="text-4xl font-bold mb-10">Carousel App</h1>
      <Carousel products={data.products} />
    </main>
  );
};

export default Home;
