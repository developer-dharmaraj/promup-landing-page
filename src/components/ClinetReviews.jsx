import { ChevronLeft, ChevronRight, House, Smile, Star } from "lucide-react";
import { reviews } from "../config/reviewsData";
import { useRef } from "react";

const StudentReviews = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-15 mt-15">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <h2 className="text-4xl md:text-5xl font-medium text-neutral-900">
                    Our Client love us!
                </h2>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                        <Smile size={18} />
                        <span className="font-medium text-neutral-900">2M+</span> Happy Students
                    </div>
                    <div className="h-6 w-px bg-neutral-300 hidden sm:block" />
                    <div className="flex items-center gap-2">
                        Rated 4.8 on
                        <span className="font-semibold text-neutral-900">Google</span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-2">
                    <button onClick={scrollLeft}
                        className="p-2 rounded-full border border-gray-300 hover:bg-neutral-100">
                        <ChevronLeft size={18} />
                    </button>

                    <button onClick={scrollRight}
                        className="p-2 rounded-full border border-gray-300 hover:bg-neutral-100">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div ref={sliderRef} className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
                {reviews.map((review, idx) => (
                    <div key={idx} className="min-w-[300px] md:min-w-[340px] bg-white border border-neutral-200 rounded-lg p-5">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-neutral-900">Rated {review.rating}/5</span>
                        </div>

                        <p className="text-neutral-700 text-sm mt-4 leading-relaxed">{review.text}</p>

                        <div className="mt-5">
                            <p className="font-semibold text-neutral-900">{review.name}</p>
                            <p className="text-sm text-neutral-500">{review.location}</p>
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-sm text-neutral-600">
                            <House size={16} />
                            <span>{review.property}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudentReviews;