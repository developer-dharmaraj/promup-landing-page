import AboutSection from '../components/AboutSection'
import DiscoverSection from '../components/DiscoverSection'
import FAQSection from '../components/FAQSection'
import FeaturedProperties from '../components/FeaturedProperties'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <FeaturedProperties />
            <DiscoverSection />
            <FAQSection />

        </div>
    )
}

export default HomePage
