import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';

import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';

type PropsType = {
    heading1: string;
    heading2: string;
    image: string;
    text: string;
};

const style = stylex.create({
    hero: {
        display: 'flex',
        alignItems: 'center',
        height: '100dvh',
        backgroundColor: '#000',
        paddingTop: '120px',
        paddingBottom: '20px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
    },
    heading1: {
        fontSize: '70px',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '2rem',
    },
    heading2: {
        position: 'relative',
        fontWeight: '400',
        marginBottom: '0',
        zIndex: '2',
    },
    image: {
        transform: 'translateY(-10px)',
        marginBottom: '30px',
    },
    text: {
        marginTop: '1.5rem',
        fontSize: '20px',
        color: '#A6A6A6',
        lineHeight: '1.2',
    },
});

const Hero = ({ heading1, heading2, image, text }: PropsType) => {
    return (
        <section {...stylex.props(style.hero)} id='hero'>
            <Container>
                <div {...stylex.props(style.content)}>
                    <h1 {...stylex.props(style.heading1)}>{heading1}</h1>
                    <h2 {...stylex.props(style.heading1, style.heading2)}>{heading2}</h2>
                    <div {...stylex.props(style.image)}>
                        <img src={image} alt='Image' />
                    </div>

                    <div>
                        <PrimaryButton link='/sales'>
                            <span>Get started</span>
                            <HiArrowSmallRight />
                        </PrimaryButton>
                        <p {...stylex.props(style.text)}>{text}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
