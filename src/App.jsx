import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // corrected import statements

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Resell from "./pages/Resell";
import Account from "./pages/Account";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resell" element={<Resell />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
