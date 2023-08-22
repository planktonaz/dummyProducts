import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ProductsPage = () => {
    const [items, setItems] = useState([]);
    const singleItem = useNavigate()

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            console.log(data.products);
            setItems(data.products)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    function toItem(id) {
        singleItem("/products/"+id)
    }

    return (
        <div className="rightSide grow4 d-flex wrap gap10">

            {items.map((x, i) =>
                <div className="items" key={i} onClick={()=>toItem(x.id)}>
                    <img src={x.thumbnail} alt=""/>
                    <h2>{x.title}</h2>
                </div>
            )}

        </div>
    )
};

export default ProductsPage;