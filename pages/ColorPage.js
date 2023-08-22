import React from 'react';
import {useParams} from "react-router-dom";

const ColorPage = () => {
    const params= useParams()

    return (
        <div className="rightSide grow4" style={{backgroundColor: params.color}}>
            <h1>Color Page</h1>
        </div>
    );
};

export default ColorPage;