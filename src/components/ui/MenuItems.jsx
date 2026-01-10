import { useEffect, useState } from "react";
import { MenuItem } from "../../config/navdata";
import { Link } from "react-router-dom";

const MenuItems = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(data => setCategories())
            .catch(() => setCategories(MenuItem));

        setCategories(MenuItem);
    }, []);
    return (
        <>
            <nav className="md:flex hidden">
                <div className="flex items-center max-w-7xl mx-auto">
                    <ul className="flex items-center gap-6 px-4 py-3 overflow-x-auto whitespace-nowrap hide-scroller">
                        {categories
                            .filter(cat => cat.isActive)
                            .sort((a, b) => a.order - b.order)
                            .map(cat => (
                                <li key={cat.id} className="text-[15px] text-gray-300 hover:text-gray-50 font-medium transition-colors duration-300 cursor-pointer">
                                    <Link to={`/${cat.slug}`}>{cat.name}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MenuItems