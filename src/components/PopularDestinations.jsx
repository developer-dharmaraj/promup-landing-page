import { useState } from "react";
import { countries, destinations } from "../config/destinationsData";

const PopularDestinations = () => {
    const [activeCountry, setActiveCountry] = useState("uk");

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-15 mt-15">
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900">
                Popular Destinations
            </h2>

            <div className="mt-6 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {countries.map((country) => (
                    <button
                        key={country.id}
                        onClick={() => setActiveCountry(country.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium whitespace-nowrap transition ${activeCountry === country.id
                                ? "bg-white shadow-md border-neutral-200"
                                : "bg-neutral-50 hover:bg-white border-neutral-200"
                            }`}>
                        <span className="text-lg">{country.flag}</span>
                        {country.name}
                    </button>
                ))}
            </div>

            <div className="mt-8 flex gap-5 overflow-x-auto scrollbar-hide pb-4">
                {destinations[activeCountry]?.map((item, idx) => (
                    <div key={idx}
                        className="relative min-w-[260px] md:min-w-[250px] h-[360px] rounded-lg overflow-hidden group cursor-pointer">
                        <img
                            src={item.image}
                            alt={item.city}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        <span className="absolute top-3 bg-black text-white text-sm px-3 py-1 rounded-r-md">
                            {item.city}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularDestinations;