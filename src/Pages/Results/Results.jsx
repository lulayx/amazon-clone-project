import React,{useState,useEffect} from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoints.js";

function Results() {
  const [results, setResults] = useState([]);
  const { CategoryName } = useParams();
  console.log(CategoryName);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/Category/${CategoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(result);

  return (
    <>
      <Layout>
        <h1 className="text-2xl p-4 font-mono font-semibold text-center">
          Results:
        </h1>
        <p className="text-xl p-4 text-center">Category/ {CategoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderBtn={true} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Results;
