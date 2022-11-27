import { Route, Routes } from "react-router-dom";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails";
import { useReducer } from "react";
import { cartReducer } from "./utils/cartReducer";
import Cart from "./components/cart";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, {
    product: [],
    totalQty: 0,
    totalPrice: 0
  });
  return (
    <div className="App">
      <Cart cart={cart}/>
      <Routes>
        <Route path="/" element={<ProductList dispatch={dispatch} cart={cart}/>} />
        {/* <Route path="/product/:name" element={<ProductDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;


