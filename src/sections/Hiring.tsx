import * as stylex from '@stylexjs/stylex';

import Container from '../components/Container';
import HiringImage from './../assets/images/hiring.png';
import PlusIcon from './../assets/icons/plus.svg';
import ArrowIcon from './../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

const style = stylex.create({
    hiring: {
        paddingTop: '145px',
        paddingBottom: '65px',
    },
    title: {
        textAlign: 'center',
        fontSize: '50px',
        lineHeight: '1.2',
        marginBottom: '9px',
    },
    description: {
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '1.3',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '130px',
    },
    contentImag: {
        width: '40%',
    },
    contentText: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '500',
        marginBottom: '20px',
    },
    contentTexts: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '26px',
    },
    circle: {
        background: '#fff',
        borderRadius: '50%',
        width: '270px',
        height: '270px',
        padding: '18px',
        boxShadow: '0px 2.024px 27.322px 0px rgba(0, 0, 0, 0.10)',
    },
    circleInner: {
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#efefef',
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
        background: '#4F59CC',
        color: '#FFF',
        fontSize: '20px',
        lineHeight: '1.2',
        padding: '16px 20px',
    },
    hours: {
        fontWeight: '700',
        fontSize: '24px',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
    },
    btn: {
        display: 'block',
        width: '260px',
        height: '76px',
        background: '#fff',
        borderRadius: '38px',
        padding: '13px 11px',
        boxShadow: '0px 2.024px 27.322px 0px rgba(0, 0, 0, 0.10)',
    },
    btnInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: '#4F59CC',
        borderRadius: '38px',
        color: '#FFF',
        fontSize: '20px',
        lineHeight: '1',
        fontWeight: '500',
    },
});

const Hiring = () => {
    return (
        <section {...stylex.props(style.hiring)}>
            <Container>
                <h3 {...stylex.props(style.title)}>Global Fractional Hiring Made Easy</h3>
                <p {...stylex.props(style.description)}>
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
                            <img src={PlusIcon} alt='Plus icon' />
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

                        <div>
                            <img src={ArrowIcon} alt='Arrow icon' />
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
