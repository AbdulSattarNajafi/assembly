import GetStart from '../sections/GetStart';
import Hero from '../sections/Hero';
import Hiring from '../sections/Hiring';
import Pricing from '../sections/Pricing';
import Talent from '../sections/Talent';
import Teams from '../sections/Teams';
import HeroImage from './../assets/images/hero.png';

const Home = () => {
    return (
        <>
            <Hero
                heading1='Lower Your Opex & Move Faster'
                heading2='Hire Incredible Experts & Teams for'
                text='Pre-Vetted Experts. Starting at - $20/Hour'
                image={HeroImage}
            />
            <Hiring />
            <Teams />
            <Talent />
            <GetStart />
            <Pricing />
        </>
    );
};

export default Home;
