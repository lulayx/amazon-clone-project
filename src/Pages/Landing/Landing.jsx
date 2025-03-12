import React from "react";
import Layout from "../../Components/Layout/Layout";
import Category from "../../Components/Catagory/Category";
import Product from "../../Components/Product/Product";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";


function Landing() {
  return (
    <Layout>
  <CarouselEffect/>
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
