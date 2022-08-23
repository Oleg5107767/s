import Categorys from "../../views/categorys/Categorys";
import CategoryProduct from "../../views/categoryProduct/CategoryProduct";
import CartItem from "../../views/cartItem/CartItem";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';




export const useStyles= makeStyles(theme => ({

}));

const LayOut = () => {
    const classes = useStyles();
    return(
        <Router>
            <div>
                <Header/>
            <main>
                <Routes>
                    <Route  path="/" element={<Categorys/>}/>
                    <Route path="/category" element={<CategoryProduct/>}/>
                    <Route path="/cart" element={<CartItem/>}/>
                </Routes>
            </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default LayOut;
