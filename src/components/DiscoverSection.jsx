import { MapPin, ArrowRight } from "lucide-react"
import { discoverData } from "../config/discoverData";

const DiscoverSection = () => {
    return (
        <section className="bg-[#eaf7f1] py-14">
            <div className="max-w-7xl mx-auto px-6 md:px-14">
                <div className="flex justify-between items-start mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-medium">{discoverData.heading}</h2>
                        <p className="text-gray-600 mt-3">{discoverData.description}</p>
                    </div>
                    <button className="group text-sm font-medium flex items-center gap-1 cursor-pointer">
                        {discoverData.cta}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>

                <div className="flex flex-col divide-y divide-emerald-100">
                    {discoverData.properties.map((item) => (
                        <div key={item.id} className="flex justify-between items-center gap-6 py-5 md:p-5 hover:bg-white transition">
                            <div className="flex items-center gap-6 flex-1 min-w-0">
                                <img src={item.image} alt={item.title} className="w-35 h-22 object-cover" />
                                
                                <div className="min-w-0">
                                    <h3 className="font-medium text-[15px] truncate">{item.title}</h3>
                                    <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                        <MapPin size={14} />
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block w-[220px] text-sm text-gray-600">
                                <p><span className="font-medium text-black">Price:</span>{" "}{item.price}</p>
                                <p className="mt-1">Property Type: {item.type}</p>
                            </div>
                            <div className="hidden md:block h-10 w-px bg-gray-300" />
                            <div className="w-[13vw] flex justify-end">
                                <button className="px-4 py-2 text-sm flex cursor-pointer group items-center gap-2 border border-gray-300 hover:bg-emerald-700 hover:text-white transition">
                                    View Details
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={16} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DiscoverSection;