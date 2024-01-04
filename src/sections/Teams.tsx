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

const style = stylex.create({
    team: {
        paddingTop: '65px',
        paddingBottom: '113px',
    },
    title: {
        textAlign: 'center',
        fontSize: '50px',
        fontWeight: '500',
        lineHeight: '1.3',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '26px',
        paddingTop: '82px',
        paddingBottom: '94px',
        // border: '1px solid red',
    },
    contentTexts: {
        width: '294px',
    },
    contentTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        fontSize: '24px',
        fontWeight: '700',
        color: '#4F59CC',
        marginBottom: '16px',
    },
    titleIcon: {
        transform: 'translateY(-3px)',
    },
    contentList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: '24px',
        paddingLeft: '24px',
    },
    card: {
        flex: '1',
        backgroundColor: '#fff',
        border: '3px solid #EFEFEF',
        borderRadius: '42px',
        boxShadow: '0px 14px 34px -10px rgba(0, 0, 0, 0.10)',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 24px',
        borderBottom: '3px solid #EFEFEF',
    },
    cardTitle: {
        fontSize: '30px',
        fontWeight: '700',
    },
    cardBody: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr) 180px',
        gridColumnGap: '12px',
        padding: '24px 20px',
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
                <h3 {...stylex.props(style.title)}>We Assemble Expert Teams that Drive Outcomes</h3>

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
                            <h5 {...stylex.props(style.cardTitle)}>Marketing Automation Experts</h5>
                            <div>dots</div>
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
