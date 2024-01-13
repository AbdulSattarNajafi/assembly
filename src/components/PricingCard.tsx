import * as stylex from '@stylexjs/stylex';
import { colors, shadow } from '../styles/tokens.stylex';

type PricingCardTypes = {
    price: string;
    text: string;
};

const style = stylex.create({
    card: {
        width: '100%',
        backgroundColor: colors.white,
        border: `3px solid ${colors.light}`,
        borderRadius: '40px',
        padding: {
            default: '20px 10px',
            '@media (min-width: 992px)': '32px 16px',
        },
        textAlign: 'center',
        boxShadow: shadow.shadowMd,
    },
    title: {
        color: colors.slateBlue,
        fontSize: {
            default: '22px',
            '@media (min-width: 768px)': '24px',
            '@media (min-width: 992px)': '30px',
            '@media (min-width: 1200px)': '45px',
        },
        fontWeight: '700',
        lineHeight: '1.3',
        marginBottom: '5px',
    },
    text: {
        color: colors.black,
        fontSize: {
            default: '18px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '26px',
            '@media (min-width: 1200px)': '36px',
        },
        fontWeight: '700',
        lineHeight: '1.3',
    },
});

const PricingCard = ({ price, text }: PricingCardTypes) => {
    return (
        <div {...stylex.props(style.card)}>
            <h5 {...stylex.props(style.title)}>{price}</h5>
            <p {...stylex.props(style.text)}>{text}</p>
        </div>
    );
};

export default PricingCard;
