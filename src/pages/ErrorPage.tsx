import { useNavigate } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { colors, shadow } from '../styles/tokens.stylex';

const style = stylex.create({
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        padding: '1rem',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '680px',
        width: '100%',
    },
    contentWrapper: {
        position: 'relative',
    },
    title: {
        position: 'relative',
        fontSize: '4rem',
        fontWeight: '700',
        lineHeight: '1.2',
        zIndex: '4',
    },
    subTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '10px',
        lineHeight: '1.2',
    },
    errorText: {
        position: 'absolute',
        left: '50%',
        top: '0',
        transform: 'translate(-50%, -45%)',
        fontSize: '5rem',
        fontWeight: '700',
        color: colors.slateBlue,
        lineHeight: '1.2',
        opacity: '0.5',
    },
    text: {
        color: colors.grayText,
        fontSize: {
            default: '1.125rem',
            '@media (min-width: 768px)': '1.25rem',
        },
        textWrap: 'balance',
        marginBottom: '32px',
    },
    btn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: colors.white,
        textAlign: 'center',
        fontSize: {
            default: '1rem',
            '@media (min-width: 768px)': '1.125rem',
        },
        fontWeight: '600',
        letterSpacing: '2.16px',
        textTransform: 'uppercase',
        lineHeight: '1.5',
        padding: '11px 22px',
        border: `1px solid ${colors.slateBlue}`,
        backgroundColor: colors.slateBlue,
        borderRadius: '35px',
        boxShadow: shadow.shadowBlue,
    },
});

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <section {...stylex.props(style.section)}>
            <div {...stylex.props(style.content)}>
                <div {...stylex.props(style.contentWrapper)}>
                    <h1 {...stylex.props(style.title)}>404</h1>
                    <h2 {...stylex.props(style.subTitle)}>Oops! Page not found</h2>
                    <p {...stylex.props(style.errorText)}>Error</p>
                    <p {...stylex.props(style.text)}>
                        The page you are looking for might have been removed or temporarily
                        unavailable.
                    </p>
                    <button
                        {...stylex.props(style.btn)}
                        onClick={() => navigate('/', { replace: true })}
                    >
                        <span>Back to Homepage</span>
                        <HiArrowSmallRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
