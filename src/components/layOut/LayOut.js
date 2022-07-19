import Categorys from "../categorys/Categorys";
import CategoryProduct from "../categoryProduct/CategoryProduct";
import CartItem from "../cartItem/CartItem";
import Header from "../header/Header";
import {ItemDetail, ModalItemDetail }from "../itemDetail/ItemDetail";
import { BrowserRouter as Router, Route, Routes    } from "react-router-dom";

const LayOut = () => {



    return(
     /*   <>
        <Categorys/>
        <CategoryProduct/>*/

       <Router>
        <div>
            <Header/>
            <main>
                <Routes>
                    <Route  path="/" element={<Categorys/>}>
    
                    </Route>
                    <Route path="/category" element={<CategoryProduct/>}>
                        
                    </Route>
                   
                    <Route path="/cart" element={<CartItem/>}/>
                </Routes>
            </main>
            </div>
    </Router>

    )
}

export default LayOut;