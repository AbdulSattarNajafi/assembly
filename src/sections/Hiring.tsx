import * as stylex from '@stylexjs/stylex';

import Container from '../components/Container';
import HiringImage from './../assets/images/hiring.png';
import PlusIcon from './../assets/icons/plus.svg';
import ArrowIcon from './../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';
import { typography } from '../styles/typography.stylex';
import { colors, shadow } from '../styles/tokens.stylex';

const style = stylex.create({
    hiring: {
        padding: {
            default: '80px 0 40px 0',
            '@media (min-width: 768px)': '100px 0 65px 0',
            '@media (min-width: 992px)': '145px 0 65px 0',
        },
    },
    title: {
        textAlign: 'center',
        marginBottom: '9px',
    },
    subtitle: {
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {
            default: 'column',
            '@media (min-width: 768px)': 'row',
        },
        marginTop: {
            default: '40px',
            '@media (min-width: 768px)': '60px',
            '@media (min-width: 992px)': '80px',
            '@media (min-width: 1200px)': '130px',
        },
    },
    contentImag: {
        width: {
            default: '100%',
            '@media (min-width: 768px)': '35%',
            '@media (min-width: 992px)': '40%',
        },
        textAlign: 'center',
    },
    contentText: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '500',
        marginBottom: '20px',
    },
    contentTexts: {
        width: {
            default: '100%',
            '@media (min-width: 768px)': '65%',
            '@media (min-width: 992px)': '60%',
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: {
            default: 'column',
            '@media (min-width: 768px)': 'row',
        },
        justifyContent: 'space-between',
        gap: {
            default: '20px',
            '@media (min-width: 1200px)': '26px',
        },
    },
    circle: {
        background: colors.white,
        borderRadius: '50%',
        width: {
            default: '170px',
            '@media (min-width: 992px)': '200px',
            '@media (min-width: 1200px)': '270px',
        },
        height: {
            default: '170px',
            '@media (min-width: 992px)': '200px',
            '@media (min-width: 1200px)': '270px',
        },
        padding: {
            default: '10px',
            '@media (min-width: 992px)': '14px',
            '@media (min-width: 1200px)': '18px',
        },
        boxShadow: shadow.shadowAround,
    },
    circleInner: {
        display: 'flex',
        width: '100%',
        height: '100%',
        background: colors.light,
        borderRadius: '50%',
        overflow: 'hidden',
    },
    circleContent: {
        width: '50%',
        height: '100%',
    },
    circelText: {
        display: 'flex',
        alignItems: 'center',
        background: colors.slateBlue,
        color: colors.white,
        fontSize: {
            default: '1rem',
            '@media (min-width: 992px)': '1.25rem',
        },
        lineHeight: '1.2',
        padding: '16px 20px',
    },
    hours: {
        fontWeight: '700',
        fontSize: {
            default: '1.25rem',
            '@media (min-width: 992px)': '1.5rem',
        },
    },
    arrow: {
        transform: {
            default: 'rotate(90deg)',
            '@media (min-width: 768px)': 'rotate(0)',
        },
    },
    icons: {
        width: {
            default: '30px',
            '@media (min-width: 992px)': '36px',
            '@media (min-width: 1200px)': '46px',
        },
        height: 'auto',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: {
            default: '12px',
            '@media (min-width: 992px)': '16px',
            '@media (min-width: 1200px)': '22px',
        },
    },
    btn: {
        display: 'block',
        width: {
            default: '180px',
            '@media (min-width: 992px)': '220px',
            '@media (min-width: 1200px)': '260px',
        },
        height: {
            default: '50px',
            '@media (min-width: 992px)': '62px',
            '@media (min-width: 1200px)': '76px',
        },
        background: colors.white,
        borderRadius: '38px',
        padding: {
            default: '6px',
            '@media (min-width: 992px)': '10px 10px',
            '@media (min-width: 1200px)': '13px 11px',
        },
        boxShadow: shadow.shadowAround,
    },
    btnInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: colors.slateBlue,
        borderRadius: '38px',
        color: colors.white,
        fontSize: {
            default: '1rem',
            '@media (min-width: 992px)': '1.25rem',
        },
        lineHeight: '1',
        fontWeight: '500',
    },
});

const Hiring = () => {
    return (
        <section {...stylex.props(style.hiring)}>
            <Container>
                <h2 {...stylex.props(typography.heading2, style.title)}>
                    Global Fractional Hiring Made Easy
                </h2>
                <p {...stylex.props(typography.textXl, style.subtitle)}>
                    We find you amazing talent that you can hire on a fractional basis in 24 hours -
                    It's that simple.
                </p>

                <div {...stylex.props(style.content)}>
                    <div {...stylex.props(style.contentImag)}>
                        <p {...stylex.props(style.contentText)}>Marketing Automation Ninjas</p>
                        <img src={HiringImage} alt='Image' />
                    </div>

                    <div {...stylex.props(style.contentTexts)}>
                        <div>
                            <img src={PlusIcon} alt='Plus icon' {...stylex.props(style.icons)} />
                        </div>

                        <div {...stylex.props(style.circle)}>
                            <div {...stylex.props(style.circleInner)}>
                                <div {...stylex.props(style.circleContent)}></div>
                                <div {...stylex.props(style.circleContent, style.circelText)}>
                                    <p>
                                        <span {...stylex.props(style.hours)}>20</span> Hours/ Week
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div {...stylex.props(style.arrow)}>
                            <img src={ArrowIcon} alt='Arrow icon' {...stylex.props(style.icons)} />
                        </div>

                        <div {...stylex.props(style.buttons)}>
                            <Link to='/sales' {...stylex.props(style.btn)}>
                                <span {...stylex.props(style.btnInner)}>Domain Expertise</span>
                            </Link>
                            <Link to='/sales' {...stylex.props(style.btn)}>
                                <span {...stylex.props(style.btnInner)}>Cost Savings</span>
                            </Link>
                            <Link to='/sales' {...stylex.props(style.btn)}>
                                <span {...stylex.props(style.btnInner)}>Pre-Vetted</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hiring;
