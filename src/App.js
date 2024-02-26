import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offers/Offers';
import Popular from './Components/Popular/Popular';
import Login from './Components/Login/Login';

const Layout = ({ children }) => {
  // This is the layout component that contains components rendered on every page
  return (
    <>
      <Navbar />
      {children}
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>{}</Layout>} />
        <Route path="/login" element={<>
              <Login />
            </>} />
      </Routes>
    </Router>
  );
};

export default App;
