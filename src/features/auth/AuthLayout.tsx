import * as stylex from '@stylexjs/stylex';
import { Outlet } from 'react-router-dom';
import AuthCardRow from './AuthCardRow';
import MultiStepCard from '../../components/MultiStepCard';
import PlatformCard from '../../components/PlatformCard';
import CompliantCard from '../../components/CompliantCard';
import { colors } from '../../styles/tokens.stylex';

const style = stylex.create({
    section: {
        display: 'flex',
        flexDirection: {
            default: 'column-reverse',
            '@media (min-width: 768px)': 'row',
        },
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        justifyContent: {
            default: 'center',
            '@media (min-width: 768px)': 'flex-end',
        },
        backgroundColor: colors.white,
        width: {
            default: '100%',
            '@media (min-width: 768px)': '50%',
        },
        padding: {
            default: '60px 0',
            '@media (min-width: 768px)': '0',
        },
    },
    formWrapper: {
        maxWidth: '657px',
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: {
            default: '16px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '30px',
            '@media (min-width: 1200px)': '70px',
        },
    },
    cards: {
        display: 'flex',
        justifyContent: {
            default: 'center',
            '@media (min-width: 992px)': 'flex-start',
        },
        backgroundColor: colors.black,
        width: {
            default: '100%',
            '@media (min-width: 768px)': '50%',
        },
        padding: {
            default: '160px 0 65px 0',
            '@media (min-width: 992px)': '200px 0 120px 0',
        },
    },
    cardsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: {
            default: '20px',
            '@media (min-width: 768px)': '16px',
        },
        maxWidth: '657px',
        width: {
            default: '260px',
            '@media (min-width: 992px)': '100%',
        },
        paddingLeft: {
            default: '16px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '30px',
            '@media (min-width: 1200px)': '70px',
        },
        paddingRight: '16px',
    },
});

const AuthLayout = () => {
    return (
        <section {...stylex.props(style.section)}>
            <div {...stylex.props(style.form)}>
                <div {...stylex.props(style.formWrapper)}>
                    <Outlet />
                </div>
            </div>
            <div {...stylex.props(style.cards)}>
                <div {...stylex.props(style.cardsWrapper)}>
                    <AuthCardRow title='Multi-Step Vetting Process of Experts'>
                        <MultiStepCard />
                    </AuthCardRow>
                    <AuthCardRow title='One Platform to Manage & Deletage Tasks'>
                        <PlatformCard />
                    </AuthCardRow>
                    <AuthCardRow title='Transparent Pricing, Streamlined Payments & Compliance'>
                        <CompliantCard />
                    </AuthCardRow>
                </div>
            </div>
        </section>
    );
};

export default AuthLayout;
