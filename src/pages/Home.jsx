import Hero from "../components/Hero.jsx";
import Specials from "../components/Specials.jsx";
import OurStory from "../components/OurStory.jsx";
import Chef from "../components/Chef.jsx";
import Newsletter from "../components/Newsletter.jsx";

function Home() {
    return (
        <>
            <Hero />
            <Specials />
            <OurStory />
            <Chef />
            <Newsletter />
        </>
    );
}

export default Home;