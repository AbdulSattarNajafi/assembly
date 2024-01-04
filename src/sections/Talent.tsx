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

const style = stylex.create({
    section: {
        paddingTop: '113px',
        paddingBottom: '152px',
        background: '#F3F3F3',
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
        justifyContent: 'center',
        marginTop: '95px',
        marginBottom: '72px',
    },
    cardWrapper: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    card: {
        maxWidth: '620px',
    },
    skills: {
        display: 'flex',
        flexDirection: 'column',
        gap: '42px',
        width: '50%',
        paddingLeft: '80px',
    },
    btnWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        width: '290px',
        background: '#4F59CC',
        borderRadius: '46px',
        padding: '13px 17px',
        boxShadow: ' 0px 30px 40px -20px rgba(79, 89, 204, 0.60)',
    },
    btnIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        width: '68px',
        height: '68px',
        borderRadius: '50%',
        fontSize: '32px',
        color: '#4F59CC',
    },
    btnText: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        gap: '6px',
        fontSize: '18px',
        color: '#fff',
        letterSpacing: '2.16px',
    },
});

const Talent = () => {
    return (
        <section {...stylex.props(style.section)}>
            <Container>
                <h3 {...stylex.props(style.title)}>Let’s Talk about Our Talent</h3>
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
