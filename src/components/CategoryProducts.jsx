import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryProducts.css';


const productsData = {
    // Аксесуари для ванної
    "bath-accessories": [
        { id: 1, name: 'Усі аксесуари для ванної', price: 100, description: 'Універсальні аксесуари для ванної кімнати', image: '/src/assets/images/products/bath-accessories-all1.jpg' },
        { id: 2, name: 'Диспенсери для мила', price: 80, description: 'Зручні диспенсери для рідкого мила', image: '/src/assets/images/products/soap-dispenser.jpg' },
        { id: 3, name: 'Тримачі для зубних щіток', price: 50, description: 'Компактні тримачі для щіток', image: '/src/assets/images/products/toothbrush-holder1.jpg' },
        { id: 4, name: 'Відро для сміття', price: 150, description: 'Невелике відро для сміття', image: '/src/assets/images/products/trash-bin.jpg' },
        { id: 5, name: 'Щітки для туалету', price: 70, description: 'Щітки для туалету', image: '/src/assets/images/products/toilet-brush.jpg' }
    ],

    // Занавіски для душу
    "shower-curtains": [
        { id: 6, name: 'Занавіски для душу', price: 120, description: 'Захисні занавіски для душу', image: '/src/assets/images/products/shower-curtain.jpg' }
    ],

    // Килимки для ванної
    "bath-mats": [
        { id: 7, name: 'Килимки для ванної', price: 90, description: 'М\'які килимки для ванної кімнати', image: '/src/assets/images/products/bath-mats1.jpg' }
    ],

    // Халати
    "bathrobes": [
        { id: 8, name: 'Халати', price: 250, description: 'Зручні халати для дому', image: '/src/assets/images/products/bathrobes1.jpg' }
    ],

    // Капці
    "slippers": [
        { id: 9, name: 'Капці', price: 60, description: 'Домашні капці для комфортного відпочинку', image: '/src/assets/images/products/slippers1.jpg' }
    ],

    // Дзеркала
    "bath-mirrors": [
        { id: 10, name: 'Дзеркала', price: 500, description: 'Різноманітні дзеркала для ванної', image: '/src/assets/images/products/mirror1.jpg' }
    ],

    // Аромадифузори
    "aroma-diffusers": [
        { id: 11, name: 'Аромадифузори', price: 200, description: 'Аромадифузори для створення приємної атмосфери', image: '/src/assets/images/products/aroma-diffusers1.jpg' }
    ],

    // Карниз для ванної
    "bath-curtain-rods": [
        { id: 12, name: 'Карниз для ванної', price: 180, description: 'Міцний карниз для штор', image: '/src/assets/images/products/curtain-rod.jpg' }
    ],

    // Полиці для ванної
    "bath-shelves": [
        { id: 13, name: 'Полиці для ванної', price: 300, description: 'Зручні полиці для ванної кімнати', image: '/src/assets/images/products/bath-shelf1.jpg' }
    ],

    // Аксесуари для прання
    "laundry-accessories": [
        { id: 14, name: 'Кошики для білизни', price: 140, description: 'Зручні кошики для білизни', image: '/src/assets/images/products/laundry-basket.jpg' },
        { id: 15, name: 'Сушіння', price: 250, description: 'Аксесуари для сушіння одягу', image: '/src/assets/images/products/drying-rack.jpg' },
        { id: 16, name: 'Прасувальні дошки', price: 350, description: 'Дошки для прасування', image: '/src/assets/images/products/ironing-board.jpg' }
    ]
};




const CategoryProducts = ({ addToCart }) => {
    const { categoryName } = useParams();
    const filteredProducts = productsData[categoryName] || [];

    return (
        <div className="category-products">
            <h2>Товары для категории: {categoryName}</h2>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Цена: {product.price} грн</p>
                            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                        </div>
                    ))
                ) : (
                    <p>Товары в этой категории пока не добавлены.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;