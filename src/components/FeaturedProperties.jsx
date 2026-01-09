import { ArrowLeft, ArrowRight, Dot, MapPin } from "lucide-react"
import { useRef } from "react"
import { featuredProperties } from "../config/featuredPropertiesData"

const FeaturedProperties = () => {
    const sliderRef = useRef(null)
    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -350, behavior: "smooth" })
    }
    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 350, behavior: "smooth" })
    }

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-14 mt-20 mb-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <h2 className="text-4xl md:text-5xl md:w-[45%] font-medium leading-tight">
                    Featured Properties from Around the Globe
                </h2>
                <div className="md:w-[30vw]">
                    <p className="text-gray-600">
                        Discover a curated selection of exceptional properties from around
                        the world. Each listing offers a unique opportunity to own a piece
                        of the global real estate market.
                    </p>

                    <div className="flex gap-2 mt-8">
                        <button onClick={scrollLeft}
                            className="p-1 border border-gray-300 hover:bg-black hover:text-white transition">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={scrollRight}
                            className="p-1 border border-gray-300 hover:bg-black hover:text-white transition">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div ref={sliderRef}
                className="mt-12 flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide touch-pan-x" >
                {featuredProperties.map((item) => (
                    <div key={item.id} className="min-w-full md:min-w-[340px] flex-shrink-0">
                        <div className="relative h-[240px] w-full overflow-hidden bg-gray-200">
                            <img src={item.image} alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                            <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded">
                                {item.tag}
                            </span>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-[16px] font-medium">{item.title}</h3>
                                <div className="flex items-center text-[13px] ">
                                    <p className="font-medium text-gray-700">{item.price}</p>
                                    <Dot size={30} className="text-gray-700" />
                                    <span className="text-gray-500">{item.type}</span>
                                </div>
                            </div>
                            <div className="text-[13px] text-gray-500 mt-1">
                                <span className="flex items-center gap-1">
                                    <MapPin size={15} />
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProperties;