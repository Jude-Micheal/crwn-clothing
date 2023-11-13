import { Routes, Route } from "react-router-dom";

import Home from "./routers/home/home.component";
import Navigation from "./routers/navigation/navigation.component";
import Authentication from "./routers/authentication/authentication.component";
import Shop from "./routers/shop/shop.component";
import Checkout from "./routers/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
