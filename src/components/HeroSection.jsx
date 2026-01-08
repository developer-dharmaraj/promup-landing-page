import { ChevronDown, Search } from "lucide-react"
import { HeroData } from "../config/heroData"

const HeroSection = () => {
    return (
        <section>
            <div className="relative max-w-7xl mx-auto flex"
                style={{
                    backgroundImage: `url(${HeroData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative flex items-center justify-between z-10 max-w-7xl mx-auto px-6 md:px-15 mt-45 md:mt-55 pb-5 text-white">
                    <div>
                        <div className="flex gap-3 mb-6">
                            {Object.values(HeroData.cate).map((item, i) => (
                                <span key={i} className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold max-w-3xl ">{HeroData.heading}</h1>
                        <p className="flex md:hidden mt-6 text-xl max-w-xl text-white/80">{HeroData.para}</p>
                        <div className="mt-5  rounded-xl py-5 flex flex-col md:flex-row gap-10">
                            <div className="flex md:gap-10 ">
                                <Select label="Type" value={HeroData.type}  /> 
                                <Select label="Price" value={HeroData.price} />
                                <Select label="Area" value={HeroData.location} />
                            </div>
                            <button className="bg-emerald-800 hover:bg-emerald-900 transition px-8 py-3 flex gap-2">
                                <Search /> Search
                            </button>
                        </div>
                    </div>
                    <div className="md:flex hidden">
                        <p className="mt-6 text-xl max-w-xl text-white/80">{HeroData.para}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Select = ({ label, value }) => (
    <div className="flex flex-col w-full md:w-auto">
        <span className="text-xs text-white/60 mb-1">{label}</span>
        <div className="text-sm">{value}</div>
    </div>
)

export default HeroSection;