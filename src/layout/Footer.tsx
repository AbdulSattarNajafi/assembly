import * as stylex from '@stylexjs/stylex';
import { FaTwitter, FaLinkedinIn, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Container from '../components/Container';
import FooterImage from './../assets/images/footer.png';
import FooterLogo from './../assets/icons/footer-logo.svg';

const style = stylex.create({
    footer: {
        backgroundColor: '#000',
        paddingTop: '120px',
        paddingBottom: '70px',
    },
    content: {
        display: 'flex',
    },
    texts: {
        width: '55%',
        textAlign: 'center',
        fontSize: '24px',
        color: '#fff',
        paddingRight: '65px',
        paddingBottom: '80px',
        // border: '1px solid red',
    },
    title: {
        fontSize: '50px',
        lineHeight: '1.2',
        fontWeight: '500',
        marginTop: '1rem',
        marginBottom: '30px',
    },
    links: {
        width: '45%',
        paddingLeft: '65px',
        color: '#878787',
        // border: '1px solid red',
    },
    logo: {
        display: 'inline-block',
        width: '210px',
        marginBottom: '40px',
    },
    menu: {
        marginTop: '24px',
    },
    menuTitle: {
        fontSize: '24px',
        color: '#fff',
        fontWeight: '700',
        lineHeight: '2',
        marginBottom: '8px',
    },
    menuList: {
        display: 'grid',
        gridTemplateColumns: '120px 160px',
        gridColumnGap: '20px',
        gridRowGap: '5px',
    },
    menuLink: {
        display: 'block',
        color: '#878787',
    },
    copyright: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingTop: '50px',
        borderTop: '1px solid #5E5E5E',
        color: '#878787',
    },
    copyrightList: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    copyrightLink: {
        display: 'inline-block',
        fontSize: '1.25rem',
        color: '#fff',
    },
    linkUp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: '#4F59CC',
        borderRadius: '50%',
        fontSize: '1.25rem',
        lineHeight: '1',
        color: '#fff',
        cursor: 'pointer',
    },
});

const Footer = () => {
    return (
        <footer {...stylex.props(style.footer)}>
            <Container>
                <div {...stylex.props(style.content)}>
                    <div {...stylex.props(style.texts)}>
                        <p>Critical Project Work Completed by Top 1% Experts</p>
                        <h3 {...stylex.props(style.title)}>At a Fraction of the Cost</h3>
                        <div>
                            <img src={FooterImage} alt='Image' />
                        </div>
                    </div>

                    <div {...stylex.props(style.links)}>
                        <Link to='/' {...stylex.props(style.logo)}>
                            <img src={FooterLogo} alt='Assembly Logo' />
                        </Link>
                        <p>
                            Assembly Industries allows companies to scale their business cost
                            effectively by hiring vetted fractional experts.
                        </p>

                        <div {...stylex.props(style.menu)}>
                            <h5 {...stylex.props(style.menuTitle)}>Links</h5>
                            <ul {...stylex.props(style.menuList)}>
                                <li>
                                    <Link to='/' {...stylex.props(style.menuLink)}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' {...stylex.props(style.menuLink)}>
                                        Terms of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' {...stylex.props(style.menuLink)}>
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' {...stylex.props(style.menuLink)}>
                                        Roles & Capabilities
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div {...stylex.props(style.copyright)}>
                    <ul {...stylex.props(style.copyrightList)}>
                        <li>
                            <a href='#' {...stylex.props(style.copyrightLink)}>
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href='#' {...stylex.props(style.copyrightLink)}>
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                    <p>
                        <span>&copy; {new Date().getFullYear()} </span>
                        <span>Assembly Industries. All rights reserved.</span>
                    </p>
                    <ScrollLink
                        to='hero'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        {...stylex.props(style.linkUp)}
                    >
                        <FaChevronUp />
                    </ScrollLink>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
