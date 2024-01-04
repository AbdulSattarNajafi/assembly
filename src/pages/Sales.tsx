import Hero from '../sections/Hero';
import HeroImage from './../assets/images/hero.png';

const Sales = () => {
    return (
        <>
            <Hero
                heading1='Lower Your Opex & Move Faster'
                heading2='Hire Incredible Experts & Teams for'
                text='Pre-Vetted Experts. Starting at - $20/Hour'
                image={HeroImage}
            />
        </>
    );
};

export default Sales;
