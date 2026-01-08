import { aboutData } from "../config/aboutData"

const AboutSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-14 mt-20">
            <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="md:w-[45%]">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium">
                        {aboutData.tag}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-medium mt-6 leading-tight">{aboutData.title}</h3>
                    <p className="mt-6 text-gray-600 leading-relaxed">{aboutData.description}</p>
                </div>

                <div className="flex flex-col gap-5">
                    {aboutData.features.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.id} className={`p-5 ${item.bg} ${item.text}`}>
                                <Icon size={30} />
                                <h4 className="text-lg font-medium mt-4">{item.title}</h4>
                                <p className="text-sm mt-2 opacity-80">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutSection