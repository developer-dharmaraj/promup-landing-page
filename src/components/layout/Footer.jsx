import { Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";
import { Link } from "react-router-dom";
import { footerData } from "../../config/footerData";

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-14 py-14">
                <div className=" flex justify-between gap-12 flex-col md:flex-row">
                    <div>
                        <BrandLogo />
                        <div className="mt-8">
                            <h3 className="text-lg font-medium">Subscribe</h3>
                            <p className="text-sm text-gray-400 mt-2">
                                {footerData.description}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center border border-gray-600 rounded-full overflow-hidden">
                            <div className="flex items-center gap-3 px-4 flex-1">
                                <Mail size={18} className="text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent text-sm text-white outline-none w-full placeholder:text-gray-500"
                                />
                            </div>
                            <button className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 transition text-sm font-medium">
                                Subscribe
                            </button>
                        </div>

                        <p className="text-xs text-gray-400 mt-4">
                            By subscribing you agree to our{" "}
                            <Link to="/privacy" className="text-white underline">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                        {footerData.links.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="text-lg font-medium mb-4">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2 text-sm text-gray-400">
                                    {section.items.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                to={link.path}
                                                className="hover:text-white transition"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2025 PromUP. All rights reserved.</p>

                    <div className="flex gap-6">
                        {footerData.bottomLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path}
                                className="hover:text-white transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;