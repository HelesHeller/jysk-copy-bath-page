
import CategoryItem from './CategoryItem';
import './CategoryPage.css';

const categories = [
    { name: 'Аксесуари для ванної', path: 'bath-accessories', image: '/src/assets/images/bath-accessories-all.jpg' },
    { name: 'Занавіски для душу', path: 'shower-curtains', image: '/src/assets/images/shower-curtains.jpg' },
    { name: 'Килимки для ванної', path: 'bath-mats', image: '/src/assets/images/bath-mats.jpg' },
    { name: 'Халати', path: 'bathrobes', image: '/src/assets/images/bathrobes.jpg' },
    { name: 'Капці', path: 'slippers', image: '/src/assets/images/slippers.jpg' },
    { name: 'Дзеркала', path: 'bath-mirrors', image: '/src/assets/images/mirrors.jpg' },
    { name: 'Аромадифузори', path: 'aroma-diffusers', image: '/src/assets/images/aroma-diffusers.jpg' },
    { name: 'Карниз для ванної', path: 'bath-curtain-rods', image: '/src/assets/images/curtain-rod1.jpg' },
    { name: 'Полиці для ванної', path: 'bath-shelves', image: '/src/assets/images/bath-shelf2.jpg' },
    { name: 'Аксесуари для прання', path: 'laundry-accessories', image: '/src/assets/images/laundry-accessories-all.jpg' },
];


const CategoryPage = () => (
    <div className="category-page">
        <h2>Ванна і підкатегорії</h2>
        <div className="category-grid">
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

export default CategoryPage;
