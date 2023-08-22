import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    const params = useParams()
    const [item, setItem] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/product/" + params.itemId);
            const data = await response.json();
            console.log(data);
            setItem(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="rightSide grow4 d-flex wrap gap10">
            {
                <div className="item">
                    <img src={item.thumbnail} alt=""/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            }
        </div>
    );
};

export default SingleProduct;