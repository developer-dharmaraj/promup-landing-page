import { ArrowRight } from "lucide-react";

const GatewaySection = () => {
  return (
    <section className="mt-15">
      <div>
        <div className="relative w-full overflow-hidden py-14">
          <img src="/Tropical Tiers - Residence design.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl text-white">
              <h1 className="text-4xl md:text-5xl font-medium">
                Discover the World, One Adventure at a Time
              </h1>
              <p className="mt-4 text-sm text-white/90 max-w-3xl mx-auto">
                Travel Beyond Limits. Explore Without Boundaries.
                See the World. Live the Journey.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GatewaySection;