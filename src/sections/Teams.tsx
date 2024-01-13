import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';

import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import TeamCard from '../components/TeamCard';
import Team1Bg from './../assets/images/team-1-bg.png';
import Team1 from './../assets/images/team-1.png';
import Team2Bg from './../assets/images/team-2-bg.png';
import Team2 from './../assets/images/team-2.png';
import Team3Bg from './../assets/images/team-3-bg.png';
import Team3 from './../assets/images/team-3.png';
import CostCard from '../components/CostCard';
import { typography } from '../styles/typography.stylex';
import { colors, shadow } from '../styles/tokens.stylex';

const style = stylex.create({
    team: {
        padding: {
            default: '40px 0 80px 0',
            '@media (min-width: 768px)': '165px 0 100px 0',
            '@media (min-width: 992px)': '65px 0 112px 0',
        },
    },
    title: {
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        alignItems: {
            default: 'stretch',
        },
        flexDirection: {
            default: 'column',
            '@media (min-width: 992px)': 'row',
        },
        gap: {
            default: '16px',
            '@media (min-width: 1200px)': '26px',
        },
        padding: {
            default: '40px 0',
            '@media (min-width: 992px)': '86px 0',
        },
    },
    contentTexts: {
        width: {
            default: '100%',
            '@media (min-width: 992px)': '240px',
            '@media (min-width: 1200px)': '294px',
        },
        textAlign: {
            default: 'center',
            '@media (min-width: 992px)': 'left',
        },
    },
    contentTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            default: 'center',
            '@media (min-width: 992px)': 'flex-start',
        },
        gap: '14px',
        fontSize: {
            default: '1.125rem',
            '@media (min-width: 1200px)': '1.5rem',
        },
        fontWeight: '700',
        color: colors.slateBlue,
        marginBottom: '16px',
    },
    titleIcon: {
        transform: 'translateY(-3px)',
    },
    contentList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: {
            default: '1rem',
            '@media (min-width: 992px)': '1.125rem',
            '@media (min-width: 1200px)': '1.5rem',
        },
        paddingLeft: '24px',
    },
    card: {
        flex: '1',
        backgroundColor: colors.white,
        border: `3px solid ${colors.light}`,
        borderRadius: '42px',
        boxShadow: shadow.shadowMd,
    },
    cardHeader: {
        padding: '15px 24px',
        borderBottom: `3px solid ${colors.light}`,
    },
    cardTitle: {
        textAlign: {
            default: 'center',
            '@media (min-width: 576px)': 'left',
        },
        fontWeight: '700',
    },
    cardBody: {
        display: 'grid',
        gridTemplateColumns: {
            default: '1fr',
            '@media (min-width: 474px)': 'repeat(2, 1fr)',
            '@media (min-width: 768px)': 'repeat(3, 1fr) 150px',
            '@media (min-width: 1200px)': 'repeat(3, 1fr) 180px',
        },
        gap: '12px',
        padding: {
            default: '12px',
            '@media (min-width: 768px)': '16px',
            '@media (min-width: 992px)': '24px 20px',
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
    costCards: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
});

const Teams = () => {
    return (
        <section {...stylex.props(style.team)}>
            <Container>
                <h2 {...stylex.props(typography.heading2, style.title)}>
                    We Assemble Expert Teams that Drive Outcomes
                </h2>

                <div {...stylex.props(style.content)}>
                    <div {...stylex.props(style.contentTexts)}>
                        <h5 {...stylex.props(style.contentTitle)}>
                            <span {...stylex.props(style.titleIcon)}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='10'
                                    height='10'
                                    viewBox='0 0 10 10'
                                    fill='none'
                                >
                                    <circle cx='5' cy='5' r='5' fill='#4F59CC' />
                                </svg>
                            </span>
                            <span>Marketing Automation</span>
                        </h5>
                        <ul {...stylex.props(style.contentList)}>
                            <li>Web Design & Dev</li>
                            <li>Rev Ops Specialists</li>
                            <li>Data Automation</li>
                            <li>AI / LLM MVP</li>
                            <li>Shopify Experts</li>
                            <li>Marketing Acceleration</li>
                        </ul>
                    </div>

                    <div {...stylex.props(style.card)}>
                        <div {...stylex.props(style.cardHeader)}>
                            <h4 {...stylex.props(typography.heading4, style.cardTitle)}>
                                Marketing Automation Experts
                            </h4>
                        </div>

                        <div {...stylex.props(style.cardBody)}>
                            <TeamCard
                                name='Adam'
                                jobTitle='Data Analyst & BI Tools'
                                bgImage={Team1Bg}
                                image={Team1}
                                salary={30}
                                experience='10+'
                                rating={5}
                                availablity={40}
                            />
                            <TeamCard
                                name='Darsh'
                                jobTitle='Hubspot Developer'
                                bgImage={Team2Bg}
                                image={Team2}
                                salary={30}
                                experience='5-10'
                                rating={5}
                                availablity={20}
                            />
                            <TeamCard
                                name='Tenzin'
                                jobTitle='Salesforce Developer'
                                bgImage={Team3Bg}
                                image={Team3}
                                salary={20}
                                experience='5-10'
                                rating={5}
                                availablity={10}
                            />
                            <div {...stylex.props(style.costCards)}>
                                <CostCard description='Full Time' price='11,200' isActive={false} />
                                <CostCard description='Assembly' price='2,800' isActive={true} />
                            </div>
                        </div>
                    </div>
                </div>

                <div {...stylex.props(style.button)}>
                    <PrimaryButton link='/sales'>
                        <span>Get started</span>
                        <HiArrowSmallRight />
                    </PrimaryButton>
                </div>
            </Container>
        </section>
    );
};

export default Teams;
