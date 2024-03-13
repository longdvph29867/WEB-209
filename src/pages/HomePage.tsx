import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import HowItWork from "../components/HowItWork";
import ProductsList from "../components/ProductsList";
import Banner2 from "../components/Banner2";
import ShoppingFeatures from "../components/ShoppingFeatures";

type Props = {};

const HomePage = (props: Props) => {
  const [count, setcount] = useState(2);
  const [load, setload] = useState(true);

  useEffect(() => {
    console.log(load);
  }, [load]);

  return (
    <>
      <Banner />
      <HowItWork />
      <ProductsList />
      <Banner2 />
      <ProductsList gender="female" />
      <ProductsList gender="male" />
      <ShoppingFeatures className="container mx-auto grid grid-cols-4 mt-10" />
      <div className="text-center">
        <h1 className="text-5xl">{count}</h1>
        <button
          onClick={() => setload(!load)}
          className="border border-green-500 py-2 px-4 rounded-lg mt-5 text-green-500"
        >
          Nhấn em đi
        </button>
      </div>
    </>
  );
};

export default HomePage;
