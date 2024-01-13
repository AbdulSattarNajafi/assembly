import * as stylex from '@stylexjs/stylex';
import { colors, shadow } from '../styles/tokens.stylex';

type CostCardTypes = {
    description: string;
    price: string;
    isActive?: boolean;
};

const style = stylex.create({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        textAlign: 'center',
        background: colors.white,
        border: `1px solid ${colors.light}`,
        borderRadius: '23px',
        color: colors.gray600,
        padding: '1rem',
    },
    description: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.4',
        marginBottom: '6px',
    },
    price: {
        fontSize: {
            default: '1rem',
            '@media (min-width: 768px)': '1.25rem',
        },
        fontWeight: '700',
        lineHeight: '1.2',
    },
    active: {
        color: colors.black,
        borderColor: colors.black,
        boxShadow: shadow.shadowLg,
    },
});

const CostCard = ({ description, price, isActive }: CostCardTypes) => {
    return (
        <div {...stylex.props(style.card, isActive && style.active)}>
            <div>
                <h4 {...stylex.props(style.description)}>
                    {description} <br /> Monthly Cost
                </h4>
                <h5 {...stylex.props(style.price)}>${price} / month</h5>
            </div>
        </div>
    );
};

export default CostCard;
