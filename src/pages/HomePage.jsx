import AboutSection from '../components/AboutSection'
import StudentReviews from '../components/ClinetReviews'
import DiscoverSection from '../components/DiscoverSection'
import FAQSection from '../components/FAQSection'
import FeaturedProperties from '../components/FeaturedProperties'
import GatewaySection from '../components/GatewaySection'
import HeroSection from '../components/HeroSection'
import PopularDestinations from '../components/PopularDestinations'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <FeaturedProperties />
            <DiscoverSection />
            <PopularDestinations />
            <StudentReviews />
            <FAQSection />

            <GatewaySection />


        </div>
    )
}

export default HomePage
