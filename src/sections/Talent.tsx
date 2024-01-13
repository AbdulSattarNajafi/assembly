import * as stylex from '@stylexjs/stylex';
import { HiMiniPlay } from 'react-icons/hi2';

import Container from '../components/Container';
import Skills from '../components/Skills';
import Team3Bg from './../assets/images/team-3-bg.png';
import Team3 from './../assets/images/team-3.png';
import TalentCard from '../components/TalentCard';
import AdobeIcon from './../assets/icons/adobe.png';
import FigmaIcon from './../assets/icons/figma.png';
import ConvaIcon from './../assets/icons/conva.png';
import { typography } from '../styles/typography.stylex';
import { colors, shadow } from '../styles/tokens.stylex';

const style = stylex.create({
    section: {
        position: 'relative',
        padding: {
            default: '40px 0',
            '@media (min-width: 992px)': '60px 0',
            '@media (min-width: 1200px)': '113px 0 152px 0',
        },
    },
    sectionBg: {
        position: 'absolute',
        top: {
            default: '-20%',
            '@media (min-width: 768px)': '-30%',
            '@media (min-width: 992px)': '-36%',
            '@media (min-width: 1200px)': '-43%',
        },
        left: '0',
        width: '100%',
        height: {
            default: '124%',
            '@media (min-width: 768px)': '140%',
            '@media (min-width: 992px)': '150%',
            '@media (min-width: 1200px)': '160%',
        },
        background: colors.light700,
        clipPath: {
            default: 'polygon(0 12%, 100% 0%, 100% 88%, 0 100%)',
            '@media (min-width: 576px)': 'polygon(0 16%, 100% 0%, 100% 84%, 0 100%)',
            '@media (min-width: 768px)': 'polygon(0 25%, 100% 0%, 100% 75%, 0 100%)',
            '@media (min-width: 992px)': 'polygon(0 30%, 100% 0%, 100% 70%, 0 100%)',
            '@media (min-width: 1200px)': 'polygon(0 40%, 100% 0%, 100% 60%, 0 100%)',
        },
        zIndex: '1',
    },
    sectionBottomBg: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '50%',
        background: colors.black,
        zIndex: '-1',
    },
    title: {
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {
            default: 'column-reverse',
            '@media (min-width: 768px)': 'row',
        },
        gap: {
            default: '36px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '0px !important',
        },
        marginTop: {
            default: '80px',
            '@media (min-width: 992px)': '95px',
        },
        marginBottom: {
            default: '35px',
            '@media (min-width: 768px)': '50px',
            '@media (min-width: 992px)': '72px',
        },
    },
    cardWrapper: {
        display: 'flex',
        justifyContent: {
            default: 'center',
            '@media (min-width: 992px)': 'flex-end',
        },
        width: {
            default: '100%',
            '@media (min-width: 992px)': '50%',
        },
    },
    card: {
        maxWidth: '620px',
    },
    skills: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
            default: 'center',
            '@media (min-width: 768px)': 'flex-start',
        },
        gap: {
            default: '16px',
            '@media (min-width: 768px)': '30px',
            '@media (min-width: 992px)': '42px',
        },
        width: {
            default: '100%',
            '@media (min-width: 992px)': '50%',
        },
        paddingLeft: {
            default: '0',
            '@media (min-width: 768px)': '80px',
        },
    },
    btnWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        width: {
            default: '280px',
            '@media (min-width: 768px)': '290px',
        },
        background: colors.slateBlue,
        borderRadius: '46px',
        padding: '13px 17px',
        boxShadow: shadow.shadowBlue,
    },
    btnIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.white,
        width: '68px',
        height: '68px',
        borderRadius: '50%',
        fontSize: '32px',
        color: colors.slateBlue,
    },
    btnText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        textAlign: 'left',
        fontSize: '18px',
        color: colors.white,
        letterSpacing: '2.16px',
        lineHeight: '1.2',
    },
});

const Talent = () => {
    return (
        <section {...stylex.props(style.section)}>
            <div {...stylex.props(style.sectionBg)}></div>
            <div {...stylex.props(style.sectionBottomBg)}></div>
            <Container>
                <h2 {...stylex.props(typography.heading2, style.title)}>
                    Let’s Talk about Our Talent
                </h2>
                <div {...stylex.props(style.content)}>
                    <div {...stylex.props(style.cardWrapper)}>
                        <div {...stylex.props(style.card)}>
                            <TalentCard
                                name='Tenzin'
                                jobTitle='Salesforce Developer'
                                bgImage={Team3Bg}
                                image={Team3}
                                salary={20}
                                experience='5-10'
                                rating={5}
                                expertise={[AdobeIcon, FigmaIcon, ConvaIcon]}
                            />
                        </div>
                    </div>

                    <div {...stylex.props(style.skills)}>
                        <Skills title='Fluent English' description='US Time Zone' variant='light' />
                        <Skills
                            title='Rigorous Vetting'
                            description='Multi-Step Process'
                            variant='dark'
                        />
                        <Skills
                            title='$15 - $35/hour'
                            description='Scale up or Down'
                            variant='darker'
                        />
                    </div>
                </div>

                <div {...stylex.props(style.btnWrapper)}>
                    <button {...stylex.props(style.btn)}>
                        <span {...stylex.props(style.btnIcon)}>
                            <HiMiniPlay />
                        </span>
                        <span {...stylex.props(style.btnText)}>
                            <span>
                                <b>WATCH</b>
                            </span>
                            <span>
                                1 min Video
                                <br /> Introduction
                            </span>
                        </span>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Talent;
