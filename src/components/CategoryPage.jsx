import React from 'react';
import CategoryItem from './CategoryItem';
import './CategoryPage.css';

const categories = [
    {
        name: "Аксессуары для ванной",
        image: "/src/assets/images/bath-accessories.jpg",
        path: "bath-accessories"
    },
    {
        name: "Мебель для ванной",
        image: "/src/assets/images/bath-furniture.jpg",
        path: "bath-furniture"
    },
    {
        name: "Полки для ванной",
        image: "/src/assets/images/bath-shelves.jpg",
        path: "bath-shelves"
    }
];

const CategoryPage = () => {
    return (
        <div className="category-page">
            <h2>Ванна и подкатегории</h2>
            <div className="category-list">
                {categories.map((category) => (
                    <CategoryItem
                        key={category.path}
                        name={category.name}
                        image={category.image}
                        path={category.path}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
