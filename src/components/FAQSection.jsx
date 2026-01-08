import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../config/faqData";

const FAQSection = () => {
    const [activeId, setActiveId] = useState(1);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-white mt-15">
            <div className="max-w-7xl mx-auto px-6 md:px-14">
                <div className="flex justify-between flex-col md:flex-row gap-12">
                    <div className="md:w-[50%]">
                        <h2 className="text-4xl md:text-5xl font-medium">
                            {faqData.title}
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-sm">
                            {faqData.subtitle}
                        </p>
                    </div>

                    <div className="flex-1 divide-y divide-gray-400">
                        {faqData.questions.map((item) => {
                            const isOpen = activeId === item.id;
                            return (
                                <div key={item.id} className="py-5">
                                    <button onClick={() => toggleFAQ(item.id)}
                                        className="w-full flex justify-between items-center text-left cursor-pointer">
                                        <span className="text-[15px] font-medium">
                                            {item.question}
                                        </span>
                                        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {isOpen && (
                                        <p className="mt-3 text-sm text-gray-600 max-w-xl">{item.answer}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;