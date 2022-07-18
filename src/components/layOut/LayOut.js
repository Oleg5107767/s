import Categorys from "../categorys/Categorys";
import CategoryProduct from "../categoryProduct/CategoryProduct";
import {ItemDetail, ModalItemDetail }from "../itemDetail/ItemDetail";
import { BrowserRouter as Router, Route, Routes    } from "react-router-dom";

const LayOut = () => {



    return(
     /*   <>
        <Categorys/>
        <CategoryProduct/>*/
       <Router>
            <main>
                <Routes>
                    <Route  path="/" element={<Categorys/>}>
    
                    </Route>
                    <Route path="/category" element={<CategoryProduct/>}>
                        
                    </Route>
                   
                    {/*<Route path="/id" element={<ItemDetail/>}/>*/}
                </Routes>
            </main>
    </Router>

    )
}

export default LayOut;