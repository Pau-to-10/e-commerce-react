// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import LoginPage from "./auth/pages/LoginPage";
// import Header from "./components/Header/Header";
// import Cart from "./pages/Cart/Cart";
// import Home from "./pages/Home/Home";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppRouter />
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" exact element={<LoginPage />} />
    //     <Route path="/home" exact element={<Home />} />
    //     <Route path="/cart" exact element={<Cart />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
