import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';

import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import ArrowRight from './../assets/icons/arrow-right-sm.svg';
import PlatFormImg from './../assets/images/platform.png';
import TeamWorkCard from '../components/TeamWorkCard';
import TalentCoverImg from './../assets/icons/talent-logo.png';
import ReactangleIcon from './../assets/icons/rectangle.png';

import { TOP_TALENT } from '../utils/constants';

const style = stylex.create({
    section: {
        background: '#000',
        paddingTop: '152px',
        paddingBottom: '145px',
    },
    title: {
        textAlign: 'center',
        fontSize: '50px',
        color: '#fff',
        fontWeight: '500',
        lineHeight: '1.3',
    },
    cardsHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '46px',
        color: '#fff',
        marginTop: '67px',
    },
    cardsHeaderText: {
        width: '25%',
        padding: '0 15px',
    },
    cardsTitle: {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '700',
    },
    cardsWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '15px',
        // border: '1px solid red',
    },
    card: {
        width: 'calc(25% - 23px)',
        height: '100%',
        background: '#fff',
        border: '3px solid #EFEFEF',
        borderRadius: '21px',
        padding: '23px 18px',
        boxShadow: '0px 14px 34px -10px rgba(0, 0, 0, 0.10)',
    },
    cardBody: {
        padding: '14px 20px',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1.2',
    },
    cardList: {
        paddingLeft: '1rem',
        color: '#979797',
        fontWeight: '700',
        lineHeight: '25px',
        margin: '22px 0 24px 10px',
    },
    cardBadget: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.2',
    },
    cardsShape: {
        position: 'relative',
        width: '78%',
        height: '56px',
        margin: '0 auto',
        border: '6px solid #717171',
        borderTop: 'none',
        borderRadius: '0 0 40px 40px',
        marginTop: '15px',
    },
    cardsShapeIcon: {
        position: 'absolute',
        left: '-14px',
        top: '-16px',
    },
    cardsShapeRight: {
        left: 'unset',
        right: '-14px',
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
                <h3 {...stylex.props(style.title)}>Getting Started is Easy</h3>

                <div {...stylex.props(style.cardsHeader)}>
                    <div {...stylex.props(style.cardsHeaderText)}>
                        <h5 {...stylex.props(style.cardsTitle)}>
                            Tell us what <br /> you need done
                        </h5>
                    </div>
                    <div {...stylex.props(style.cardsHeaderText)}>
                        <h5 {...stylex.props(style.cardsTitle)}>
                            Our Team Gets <br /> to Work
                        </h5>
                    </div>
                    <div {...stylex.props(style.cardsHeaderText)}>
                        <h5 {...stylex.props(style.cardsTitle)}>
                            Matched Top <br /> Talent
                        </h5>
                    </div>
                    <div {...stylex.props(style.cardsHeaderText)}>
                        <h5 {...stylex.props(style.cardsTitle)}>
                            Managed through <br /> our Platform
                        </h5>
                    </div>
                </div>
                <div {...stylex.props(style.cardsWrapper)}>
                    <div {...stylex.props(style.card)}>
                        <div {...stylex.props(style.cardBody)}>
                            <h5 {...stylex.props(style.cardTitle)}>
                                DTC Brand Looking <br /> for Q4 Support:
                            </h5>
                            <ul {...stylex.props(style.cardList)}>
                                <li>&bull; Shopify Dev.</li>
                                <li>&bull; Paid Media</li>
                                <li>&bull; Graphic Design</li>
                                <li>&bull; Customer Support</li>
                                <li>&bull; Data Analyst</li>
                            </ul>
                            <h6 {...stylex.props(style.cardBadget)}>Budget: $3K/Month</h6>
                        </div>
                    </div>

                    <div>
                        <img src={ArrowRight} alt='Arrow icon' />
                    </div>

                    <TeamWorkCard teamMember={TOP_TALENT} isHighlighted coverImg={TalentCoverImg} />

                    <div>
                        <img src={ArrowRight} alt='Arrow icon' />
                    </div>

                    <TeamWorkCard teamMember={TOP_TALENT} />

                    <div>
                        <img src={ArrowRight} alt='Arrow icon' />
                    </div>

                    <div {...stylex.props(style.card)}>
                        <img src={PlatFormImg} alt='Platform Image' />
                    </div>
                </div>

                <div {...stylex.props(style.cardsShape)}>
                    <div {...stylex.props(style.cardsShapeIcon)}>
                        <img src={ReactangleIcon} alt='Rectangle Icon' />
                    </div>
                    <div {...stylex.props(style.cardsShapeIcon, style.cardsShapeRight)}>
                        <img src={ReactangleIcon} alt='Rectangle Icon' />
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
