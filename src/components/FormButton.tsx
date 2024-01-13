import * as stylex from '@stylexjs/stylex';
import { colors, shadow } from '../styles/tokens.stylex';

const style = stylex.create({
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: colors.slateBlue,
        borderRadius: '34px',
        boxShadow: shadow.shadowBlue,
        fontSize: {
            default: '16px',
            '@media (min-width: 992px)': '18px',
        },
        color: colors.white,
        lineHeight: '20px',
        textTransform: 'uppercase',
        letterSpacing: {
            default: '1px',
            '@media (min-width: 992px)': '2.16px',
        },
        fontWeight: {
            default: '400',
            '@media (min-width: 768px)': '600',
            '@media (min-width: 992px)': '700',
        },
        padding: {
            default: '20px 16px',
            '@media (min-width: 992px)': '25px 16px',
        },
    },
});

const FormButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button type='submit' {...stylex.props(style.btn)}>
            {children}
        </button>
    );
};

export default FormButton;
