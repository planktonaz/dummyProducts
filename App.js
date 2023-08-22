import './App.css';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";

import RightSidePage from "./pages/RightSidePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import ColorPage from "./pages/ColorPage";

function App() {

    return (
        <div>
            <BrowserRouter>

                <div className="container d-flex flex-column">
                    <Toolbar/>
                    <div className="main grow1 d-flex">
                        <div className="leftSide grow1">
                            <div>Menu 1</div>
                            <div>Menu 1</div>
                            <div>Menu 1</div>
                            <div>Menu 1</div>
                            <div>Menu 1</div>
                        </div>

                        <Routes>
                            <Route path="/" element={<RightSidePage/>}/>
                            <Route path="/dogs" element={<DogsPage/>}/>
                            <Route path="/cats" element={<CatsPage/>}/>
                            <Route path="/products" element={<ProductsPage/>}/>
                            <Route path="/products/:itemId" element={<SingleProduct/>}/>
                            <Route path="/color/:color" element={<ColorPage/>}/>
                        </Routes>

                    </div>
                    <div className="footer grow1">Footer</div>
                </div>

            </BrowserRouter>
        </div>
    )
}

export default App;
