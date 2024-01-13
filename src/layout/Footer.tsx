import * as stylex from '@stylexjs/stylex';
import { FaTwitter, FaLinkedinIn, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Container from '../components/Container';
import FooterImage from './../assets/images/footer.png';
import FooterLogo from './../assets/icons/footer-logo.svg';
import { colors } from '../styles/tokens.stylex';
import { typography } from '../styles/typography.stylex';

const style = stylex.create({
    footer: {
        backgroundColor: colors.black,
        padding: {
            default: '100px 0 40px 0',
            '@media (min-width: 768px)': '120px 0 70px 0',
        },
        marginTop: 'auto',
    },
    content: {
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 768px)': 'row',
        },
        alignItems: {
            default: 'center',
            '@media (min-width: 768px)': 'flex-start',
        },
    },
    texts: {
        width: {
            default: '100%',
            '@media (min-width: 768px)': '55%',
        },
        textAlign: 'center',
        fontSize: {
            default: '1.25rem',
            '@media (min-width: 768px)': '1.5rem',
        },
        color: colors.white,
        padding: {
            default: '0 0 2rem 0',
            '@media (min-width: 768px)': '0 20px 40px 0',
            '@media (min-width: 992px)': '0 65px 80px 0',
        },
    },
    title: {
        marginTop: '1rem',
        marginBottom: '30px',
    },
    links: {
        width: {
            default: '100%',
            '@media (min-width: 768px)': '45%',
        },
        padding: {
            default: '0',
            '@media (min-width: 768px)': '0 0 0 20px',
            '@media (min-width: 992px)': '0 0 0 65px',
        },
        textAlign: {
            default: 'center',
            '@media (min-width: 768px)': 'left',
        },
        textWrap: 'balance',
        color: colors.gray800,
    },
    logo: {
        display: 'inline-block',
        width: {
            default: '140px',
            '@media (min-width: 768px)': '180px',
            '@media (min-width: 992px)': '210px',
        },
        marginBottom: {
            default: '2rem',
            '@media (min-width: 768px)': '40px',
        },
    },
    menu: {
        marginTop: '24px',
    },
    menuTitle: {
        fontSize: {
            default: '1.125rem',
            '@media (min-width: 768px)': '1.5rem',
        },
        color: colors.white,
        fontWeight: '700',
        lineHeight: '2',
        marginBottom: {
            default: '0',
            '@media (min-width: 768px)': '8px',
        },
    },
    menuList: {
        display: 'grid',
        gridTemplateColumns: {
            default: 'auto',
            '@media (min-width: 768px)': '120px 160px',
        },
        justifyContent: {
            default: 'center',
            '@media (min-width: 768px)': 'start',
        },
        gridColumnGap: '20px',
        gridRowGap: '5px',
    },
    menuLink: {
        display: 'block',
        color: colors.gray800,
    },
    copyright: {
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 768px)': 'row',
        },
        alignItems: {
            default: 'stretch',
            '@media (min-width: 768px)': 'center',
        },
        justifyContent: 'space-between',
        gap: '1rem',
        textAlign: 'center',
        paddingTop: {
            default: '1.25rem',
            '@media (min-width: 768px)': '25px',
            '@media (min-width: 992px)': '50px',
        },
        borderTop: {
            default: 'none',
            '@media (min-width: 768px)': `1px solid ${colors.gray500}`,
        },
        color: colors.gray800,
    },
    copyrightList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            default: 'center',
        },
        gap: '1rem',
        borderBottom: {
            default: `1px solid ${colors.gray500}`,
            '@media (min-width: 768px)': 'none',
        },
        paddingBottom: {
            default: '1.25rem',
            '@media (min-width: 768px)': '0',
        },
    },
    copyrightLink: {
        display: 'inline-block',
        fontSize: '1.25rem',
        color: colors.white,
    },
    linkUp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        margin: {
            default: '1rem auto 0 auto',
            '@media (min-width: 768px)': '0',
        },
        backgroundColor: colors.slateBlue,
        borderRadius: '50%',
        fontSize: '1.25rem',
        lineHeight: '1',
        color: colors.white,
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
                        <h3 {...stylex.props(typography.heading2, style.title)}>
                            At a Fraction of the Cost
                        </h3>
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
                        to='header'
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
