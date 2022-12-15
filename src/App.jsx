import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/Navigation-bar.component';
import Home from './routes/home/Home.component';
import SignIn from './routes/sign-in/Sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<div>Shop Page</div>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
