import Categorys from "../../views/categorys/Categorys";
import CategoryProduct from "../../views/categoryProduct/CategoryProduct";
import CartItem from "../../views/cartItem/CartItem";
import Header from "../header/Header";
//import Header123 from "../header/Header123";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withSideBar } from "../../HOC/withSideBar";
import { makeStyles } from '@material-ui/core/styles';



const CategoryProductWithSidebar = withSideBar(CategoryProduct);
export const useStyles= makeStyles(theme => ({
    position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      //backgroundImage :`url(${"https://drive.google.com/uc?export=view&id=1OvatdWSTVi1zOtA11ULFjnqSf9mZ2Qxe"})`,
    
      opacity: '0.53',
}));

const LayOut = () => {
    const classes = useStyles();
    return(

       <Router>
            
            <div >
                
                

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
