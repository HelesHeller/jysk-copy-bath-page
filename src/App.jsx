import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import './App.css';
import { useState } from 'react';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <Router>
            <header className="app-header">
                <nav>
                    <Link to="/">Ванна и подкатегории</Link>
                    <Link to="/cart">Корзина ({cartItems.length})</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/categories/:categoryName" element={<CategoryProducts addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
        </Router>
    );
};

export default App;
