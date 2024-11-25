import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import WatchedList from "./pages/WatchedList";
import News from "./pages/News";
import About from "./pages/About";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watched-list" element={<WatchedList />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
