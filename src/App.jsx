import { Routes, Route } from 'react-router-dom';

import NavigationBar from './routes/navigation/Navigation-bar.component';
import Home from './routes/home/Home.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/Checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
