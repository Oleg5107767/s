import Categorys from "../categorys/Categorys";
import CategoryProduct from "../categoryProduct/CategoryProduct";
import CartItem from "../cartItem/CartItem";
import Header from "../header/Header";
import {ItemDetail, ModalItemDetail }from "../itemDetail/ItemDetail";
import { BrowserRouter as Router, Route, Routes    } from "react-router-dom";
import { withSideBar } from "../HOC/withSideBar";


const CategoryProductWithSidebar = withSideBar(CategoryProduct);


const LayOut = () => {

    return(

       <Router>
            <div style={{marginTop : '80px'}}>
                <Header/>
            <main>
                <Routes>
                    <Route  path="/" element={<Categorys/>}/>
                    <Route path="/category" element={<CategoryProductWithSidebar/>}/>
                    <Route path="/cart" element={<CartItem/>}/>
                </Routes>
            </main>
            </div>
        </Router>

    )
}

export default LayOut;
