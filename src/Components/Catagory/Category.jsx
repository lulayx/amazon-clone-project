import React from "react";
import { CategoryInfos} from "./CategoryFullInfos";
import classes from "./category.module.css";
import CategoryCard from "./CategoryCard"

function Category() {// we use props method to pass the catagories. First, impport categoryInfos data, then we map out with call back method to access the categoryCard info data.
  return (
    <section className={classes.category_container}> 
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.imgLink} data={infos} />
      ))}
    </section>
  );
}

export default Category;
