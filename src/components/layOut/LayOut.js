import Categorys from "../../views/categorys/Categorys";
import CategoryProduct from "../../views/categoryProduct/CategoryProduct";
import CartItem from "../../views/cartItem/CartItem";
import Header from "../header/Header";
//import Header123 from "../header/Header123";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withSideBar } from "../../HOC/withSideBar";




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
                <Footer/>
            </div>
        </Router>

    )
}

export default LayOut;
