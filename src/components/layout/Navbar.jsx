import AuthModal from "../../auth/AuthModal";
import BrandLogo from "../ui/BrandLogo";
import MenuItems from "../ui/MenuItems";

const Navbar = () => {
    return (
        <header className="absolute top-0 z-50 w-full">
            <nav className="flex justify-between items-center  md:px-15 px-6 mt-5 max-w-7xl mx-auto">
                <div><BrandLogo /></div>
                <div><MenuItems /></div>
                <div className="flex gap-8 items-center">
                    <AuthModal />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
