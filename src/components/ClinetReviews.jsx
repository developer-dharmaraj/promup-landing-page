import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "../config/reviewsData";

const StudentReviews = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-15 mt-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-semibold text-neutral-900">
                        Our students love us!
                    </h2>
                </div>

                <div className="flex items-center gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                        😊 <span className="font-medium text-neutral-900">2M+</span> Happy Students
                    </div>

                    <div className="h-6 w-px bg-neutral-300 hidden sm:block" />

                    <div className="flex items-center gap-2">
                        Rated 4.8 out of 5 on
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

                {/* ARROWS (Desktop) */}
                <div className="hidden lg:flex items-center gap-2">
                    <button className="p-2 rounded-full border hover:bg-neutral-100">
                        <ChevronLeft size={18} />
                    </button>
                    <button className="p-2 rounded-full border hover:bg-neutral-100">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* REVIEWS */}
            <div className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] sm:min-w-[340px] lg:min-w-[360px] bg-white border border-neutral-200 rounded-lg p-6"
                    >
                        {/* RATING */}
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="text-neutral-900 font-medium">
                                Rated {review.rating} out of 5
                            </span>
                        </div>

                        {/* TEXT */}
                        <p className="text-neutral-700 text-sm mt-4 leading-relaxed">
                            {review.text}
                        </p>

                        {/* USER */}
                        <div className="mt-6">
                            <p className="font-semibold text-neutral-900">
                                {review.name}
                            </p>
                            <p className="text-sm text-neutral-500">
                                {review.location}
                            </p>
                        </div>

                        {/* PROPERTY */}
                        <div className="flex items-center gap-2 mt-4 text-sm text-neutral-600">
                            🏠 <span>{review.property}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudentReviews;