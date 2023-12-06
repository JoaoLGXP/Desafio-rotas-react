
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import MainPage from "./routes";
import Computers from "./routes/Products/Product/Computers";
import Eletronics from "./routes/Products/Product/Eletronics";
import Books from "./routes/Products/Product/Books";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Navigate to="computers" />} />
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
