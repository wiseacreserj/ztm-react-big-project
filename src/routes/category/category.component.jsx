import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card-component";

import { CategoryContainer, Title } from "./category.styles.jsx";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;
