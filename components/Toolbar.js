import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="toolbar d-flex j-center a-center d-flex gap10">
            <Link to="/">Home</Link>
            <Link to="/cats">Cats</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/products">Products</Link>
            <Link to="/color/aqua">Color Page</Link>
        </div>
    );
};

export default Toolbar;