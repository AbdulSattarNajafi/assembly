import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';

import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import ArrowRight from './../assets/icons/arrow-right-sm.svg';

import TeamWorkCard from '../components/TeamWorkCard';
import TalentCoverImg from './../assets/icons/talent-logo.png';
import ReactangleIcon from './../assets/icons/rectangle.png';

import { TOP_TALENT } from '../utils/constants';
import OurPlatformCard from '../components/OurPlatformCard';
import SupportCard from '../components/SupportCard';
import { colors } from '../styles/tokens.stylex';
import { typography } from '../styles/typography.stylex';

const style = stylex.create({
    section: {
        background: colors.black,
        padding: {
            default: '80px 0',
            '@media (min-width: 768px)': '100px 0',
            '@media (min-width: 1200px)': '150px 0',
        },
    },
    title: {
        textAlign: 'center',
        color: colors.white,
    },
    content: {
        display: 'flex',
        justifyContent: {
            default: 'center',
        },
        flexDirection: {
            default: 'row',
            '@media (min-width: 992px)': 'column-reverse',
        },
        gap: {
            default: '10px',
            '@media (min-width: 576px)': '15px',
            '@media (min-width: 992px)': '20px',
        },
        paddingRight: {
            default: '20px',
            '@media (min-width: 992px)': '0',
        },
        marginTop: {
            default: '40px',
            '@media (min-width: 768px)': '50px',
            '@media (min-width: 1200px)': '67px',
        },
    },
    cardsWrapper: {
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 992px)': 'row',
        },
        alignItems: 'center',
        gap: {
            default: '12px',
            '@media (min-width: 768px)': '8px',
        },
        width: {
            default: '310px',
            '@media (min-width: 576px)': '600px',
            '@media (min-width: 992px)': '100% !important',
        },
        marginTop: '15px',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 576px)': 'row',
        },
        alignItems: {
            default: 'center',
            '@media (min-width: 576px)': 'stretch',
        },
        gap: {
            default: '12px',
            '@media (min-width: 576px)': '8px',
        },
        width: {
            default: '100%',
            '@media (min-width: 992px)': 'calc(50% - 15px)',
        },
    },
    card: {
        display: 'flex',
        width: {
            default: '100%',
            '@media (min-width: 576px)': 'calc(50% - 15px)',
        },
    },

    arrowIcons: {
        transform: {
            default: 'rotate(90deg) translateX(5px)',
            '@media (min-width: 992px)': 'rotate(0) translateX(0)',
        },
        width: {
            default: 'auto',
            '@media (min-width: 576px)': '24px',
            '@media (min-width: 1200px)': '32px',
        },
        paddingTop: {
            default: '0',
            '@media (min-width: 992px)': '92px',
        },
    },
    arrowMiddleIcons: {
        alignSelf: 'center',
        transform: {
            default: 'rotate(90deg) translateX(5px)',
            '@media (min-width: 576px)': 'rotate(0) translateX(0)',
        },
        paddingTop: {
            default: '0',
            '@media (min-width: 576px)': '74px',
            '@media (min-width: 992px)': '92px',
        },
        width: {
            default: 'auto',
            '@media (min-width: 576px)': '24px',
            '@media (min-width: 1200px)': '32px',
        },
    },
    cardsShapeWraper: {
        display: 'flex',
        alignItems: 'center',
        width: {
            default: '20px',
            '@media (min-width: 992px)': '100%',
        },
        paddingTop: {
            default: '64px',
            '@media (min-width: 576px)': '74px',
            '@media (min-width: 992px)': '0 !important',
        },
    },
    cardsShape: {
        position: 'relative',
        width: {
            default: '20px',
            '@media (min-width: 992px)': '78%',
        },
        height: {
            default: '80%',
            '@media (min-width: 576px)': '64%',
            '@media (min-width: 992px)': '56px !important',
        },
        margin: '0 auto',
        border: `6px solid ${colors.gray700}`,
        borderTop: {
            default: `6px solid ${colors.gray700}`,
            '@media (min-width: 992px)': 'none',
        },
        borderRight: {
            default: 'none',
            '@media (min-width: 992px)': `6px solid ${colors.gray700}`,
        },
        borderRadius: {
            default: '40px 0 0 40px',
            '@media (min-width: 992px)': '0 0 40px 40px',
        },
    },
    cardsShapeIcon: {
        position: 'absolute',
        left: {
            default: '8px',
            '@media (min-width: 992px)': '-14px',
        },
        top: {
            default: '-14px',
            '@media (min-width: 992px)': '-16px',
        },
        transform: {
            default: 'rotate(90deg)',
            '@media (min-width: 992px)': 'rotate(0)',
        },
        width: '23px',
        height: '23px',
    },
    cardsShapeRight: {
        left: {
            default: '8px',
            '@media (min-width: 992px)': 'unset',
        },
        top: {
            default: 'unset',
            '@media (min-width: 992px)': '-16px',
        },
        right: {
            default: 'unset',
            '@media (min-width: 992px)': '-14px',
        },
        bottom: {
            default: '-14px',
        },
    },
    btnWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '63px',
    },
});

const GetStart = () => {
    return (
        <section {...stylex.props(style.section)}>
            <Container>
                <h2 {...stylex.props(typography.heading2, style.title)}>Getting Started is Easy</h2>

                <div {...stylex.props(style.content)}>
                    <div {...stylex.props(style.cardsShapeWraper)}>
                        <div {...stylex.props(style.cardsShape)}>
                            <div {...stylex.props(style.cardsShapeIcon)}>
                                <img src={ReactangleIcon} alt='Rectangle Icon' />
                            </div>
                            <div {...stylex.props(style.cardsShapeIcon, style.cardsShapeRight)}>
                                <img src={ReactangleIcon} alt='Rectangle Icon' />
                            </div>
                        </div>
                    </div>

                    <div {...stylex.props(style.cardsWrapper)}>
                        <div {...stylex.props(style.cardsContainer)}>
                            <div {...stylex.props(style.card)}>
                                <SupportCard />
                            </div>

                            <div {...stylex.props(style.arrowMiddleIcons)}>
                                <img src={ArrowRight} alt='Arrow icon' />
                            </div>

                            <div {...stylex.props(style.card)}>
                                <TeamWorkCard
                                    teamMember={TOP_TALENT}
                                    title={['Our Team Gets', 'to Work']}
                                    isHighlighted
                                    coverImg={TalentCoverImg}
                                />
                            </div>
                        </div>

                        <div {...stylex.props(style.arrowIcons)}>
                            <img src={ArrowRight} alt='Arrow icon' />
                        </div>

                        <div {...stylex.props(style.cardsContainer)}>
                            <div {...stylex.props(style.card)}>
                                <TeamWorkCard
                                    teamMember={TOP_TALENT}
                                    title={['Matched Top', 'Talent']}
                                />
                            </div>

                            <div {...stylex.props(style.arrowMiddleIcons)}>
                                <img src={ArrowRight} alt='Arrow icon' />
                            </div>

                            <div {...stylex.props(style.card)}>
                                <OurPlatformCard />
                            </div>
                        </div>
                    </div>
                </div>

                <div {...stylex.props(style.btnWrapper)}>
                    <PrimaryButton link='/sales'>
                        <span>Get started</span>
                        <HiArrowSmallRight />
                    </PrimaryButton>
                </div>
            </Container>
        </section>
    );
};

export default GetStart;
