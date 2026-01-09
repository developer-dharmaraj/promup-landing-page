import { MapPin, ArrowRight } from "lucide-react";
import { discoverData } from "../config/discoverData";

const DiscoverSection = () => {
    return (
        <section className="bg-[#eaf7f1] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-14">
                <header className="grid gap-6 md:grid-cols-[1fr_auto] mb-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
                            {discoverData.heading}
                        </h2>
                        <p className="text-gray-600 mt-3 text-sm sm:text-base">
                            {discoverData.description}
                        </p>
                    </div>

                    <button className="group inline-flex items-center gap-1 text-sm font-medium self-start"
                        aria-label="Explore properties">
                        {discoverData.cta}
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </header>

                <ul className="divide-y divide-emerald-100">
                    {discoverData.properties.map((item) => (
                        <li key={item.id} className="py-5 md:px-5 transition md:hover:bg-white">
                            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto_auto] md:items-center">
                                <img src={item.image}
                                    alt={item.title} className="w-full h-52 md:w-38 md:h-25 object-cover"
                                />

                                <div className="min-w-0">
                                    <h3 className="font-medium text-sm sm:text-[15px] truncate">{item.title} </h3>
                                    <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 mt-1">
                                        <MapPin size={14} />
                                        {item.location}
                                    </p>

                                    <p className="mt-2 text-sm text-gray-600 md:hidden">
                                        <span className="font-medium text-black">Price:</span>{" "}
                                        {item.price} · {item.type}
                                    </p>
                                </div>

                                <div className="hidden md:block text-sm text-gray-600 w-[220px]">
                                    <p> <span className="font-medium text-black">Price:</span>{" "}
                                        {item.price}
                                    </p>
                                    <p className="mt-1">Property Type: {item.type}</p>
                                </div>

                                <div className="md:border-l md:border-gray-200 md:pl-6">
                                    <button className="w-full group md:w-auto px-4 py-2 text-sm inline-flex items-center justify-center gap-2 border cursor-pointer  border-gray-300 hover:bg-emerald-700 hover:text-white transition " aria-label={`View details of ${item.title}`}>
                                        View Details
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DiscoverSection;