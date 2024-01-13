import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';

import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import { typography } from '../styles/typography.stylex';
import { colors } from '../styles/tokens.stylex';

type PropsType = {
    heading1: string;
    heading2: string;
    image: string;
    text: string;
};

const style = stylex.create({
    hero: {
        backgroundColor: colors.black,
        padding: {
            default: '160px 0 100px 0',
            '@media (min-width: 768px)': '200px 0 120px 0',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.white,
    },
    heading1: {
        marginBottom: '2rem',
    },
    heading2: {
        position: 'relative',
        fontWeight: '400',
        zIndex: '2',
    },
    image: {
        transform: 'translateY(-10px)',
        marginBottom: {
            default: '3rem',
            '@media (min-width: 768px)': '2rem',
        },
    },
    text: {
        marginTop: '1.5rem',
        color: colors.grayText,
    },
});

const Hero = ({ heading1, heading2, image, text }: PropsType) => {
    return (
        <section {...stylex.props(style.hero)}>
            <Container>
                <div {...stylex.props(style.content)}>
                    <h1 {...stylex.props(typography.heading1, style.heading1)}>{heading1}</h1>
                    <h2 {...stylex.props(typography.heading1, style.heading2)}>{heading2}</h2>
                    <div {...stylex.props(style.image)}>
                        <img src={image} alt='Image' />
                    </div>

                    <div>
                        <PrimaryButton link='/sales'>
                            <span>Get started</span>
                            <HiArrowSmallRight />
                        </PrimaryButton>
                        <p {...stylex.props(typography.textLg, style.text)}>{text}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
