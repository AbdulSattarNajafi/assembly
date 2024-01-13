import { Link } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';
import { colors, shadow } from '../styles/tokens.stylex';

type PrimaryButtonTypes = {
    children: React.ReactNode;
    link: string;
};

const style = stylex.create({
    btn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: colors.white,
        textAlign: 'center',
        fontSize: {
            default: '16px',
            '@media (min-width: 992px)': '18px',
        },
        letterSpacing: {
            default: '1px',
            '@media (min-width: 992px)': '2.16px',
        },
        fontWeight: {
            default: '400',
            '@media (min-width: 768px)': '600',
            '@media (min-width: 992px)': '700',
        },
        textTransform: 'uppercase',
        lineHeight: '1.5',
        padding: '11px 22px',
        border: `1px solid ${colors.slateBlue}`,
        backgroundColor: colors.slateBlue,
        borderRadius: '35px',
        boxShadow: shadow.shadowBlue,
    },
});

const PrimaryButton = ({ children, link }: PrimaryButtonTypes) => {
    return (
        <Link to={link} {...stylex.props(style.btn)}>
            {children}
        </Link>
    );
};

export default PrimaryButton;
