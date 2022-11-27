import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { productApi } from "../constants";
import ProductCard from "./productCard";
import styles from "../styles/productList.module.scss"
const ProductList = ({ dispatch, cart }) => {

    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
            const { data } = await axios.get(productApi);
            const tempProducts = data.map(e => {
                let id = (uuidv4().split("-").join(""));
                return ({ ...e, id })
            })
            setProducts(tempProducts);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(cart)
    return (
        <div className={styles.grid}>
            {products.map(e => {
                let qty = 0;
                const tempProduct = cart.product.filter(prod => prod.id == e.id);
                if (tempProduct.length) qty = tempProduct[0].qty;
                return <ProductCard product={e} dispatch={dispatch} qty={qty} />
            })}
        </div>
    )
}

export default ProductList;