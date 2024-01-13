import * as stylex from '@stylexjs/stylex';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

import Container from '../components/Container';
import Logo from './../assets/icons/logo.svg';
import LogoDark from './../assets/icons/logo-dark.svg';
import { colors } from '../styles/tokens.stylex';
import { useState } from 'react';

const style = stylex.create({
    header: {
        position: {
            default: 'fixed',
            '@media (min-width: 768px)': 'absolute',
        },
        left: '0',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: {
            default: '60px',
            '@media (min-width: 768px)': '80px',
            '@media (min-width: 992px)': '100px',
        },
        backgroundColor: {
            default: colors.black,
            '@media (min-width: 768px)': 'transparent',
        },
        borderBottom: '1px solid transparent',
        zIndex: '10',
    },
    headerOpen: {
        borderBottomColor: {
            default: colors.menuStroke,
            '@media (min-width: 768px)': 'transparent',
        },
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 0',
    },
    logo: {
        display: {
            default: 'none',
            '@media (min-width: 768px)': 'inline-block',
        },
        maxWidth: {
            default: '140px',
            '@media (min-width: 768px)': '180px',
            '@media (min-width: 992px)': '210px',
        },
        width: '100%',
    },
    mobileLogo: {
        display: {
            default: 'inline-block',
            '@media (min-width: 768px)': 'none',
        },
        maxWidth: {
            default: '140px',
            '@media (min-width: 768px)': '180px',
            '@media (min-width: 992px)': '210px',
        },
        width: '100%',
    },
    menuBtn: {
        display: {
            default: 'flex',
            '@media (min-width: 768px)': 'none',
        },
        alignItems: 'center',
        fontSize: '2rem',
        color: colors.white,
        lineHeight: '1',
    },
    list: {
        position: {
            default: 'fixed',
            '@media (min-width: 768px)': 'static',
        },
        top: '60px',
        left: '0',
        bottom: '0',
        width: {
            default: '280px',
            '@media (min-width: 768px)': 'auto',
        },
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 768px)': 'row',
        },
        alignItems: {
            default: 'stretch',
            '@media (min-width: 768px)': 'center',
        },
        justifyContent: {
            default: 'space-between',
        },
        gap: '10px',
        background: {
            default: colors.black,
            '@media (min-width: 768px)': 'transparent',
        },
        padding: {
            default: '1rem',
            '@media (min-width: 768px)': '0',
        },
        transform: {
            default: 'translateX(-100%)',
            '@media (min-width: 768px)': 'translateX(0)',
        },
        transition: {
            default: 'all .4s ease',
            '@media (min-width: 767px)': 'all .0s',
        },
        zIndex: '10',
    },
    listOpen: {
        transform: 'translateX(0)',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            default: 'space-between',
        },
        gap: '10px',
        width: {
            default: '100%',
            '@media (min-width: 768px)': 'auto',
        },
        borderTop: {
            default: `1px solid ${colors.menuStroke}`,
            '@media (min-width: 768px)': 'none',
        },
        paddingTop: {
            default: '1rem',
            '@media (min-width: 768px)': '0',
        },
    },
    navLink: {
        display: 'inline-block',
        color: colors.white,
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: {
            default: '500',
            '@media (min-width: 992px)': '700',
        },
        letterSpacing: '1.68px',
        textTransform: 'uppercase',
        lineHeight: '1.5',
        padding: {
            default: '6px 0',
            '@media (min-width: 768px)': '8px 6px',
            '@media (min-width: 992px)': '11px 22px',
        },
    },
    navBtn: {
        border: `1px solid ${colors.slateBlue}`,
        backgroundColor: colors.slateBlue,
        borderRadius: '35px',
        padding: {
            default: '6px 20px',
            '@media (min-width: 768px)': '8px 18px',
            '@media (min-width: 992px)': '11px 22px',
        },
    },
    signinBtn: {
        borderColor: colors.white,
        backgroundColor: 'transparent',
    },
    backdrop: {
        position: 'fixed',
        inset: '0',
        display: {
            default: 'block',
            '@media (min-width: 768px)': 'none',
        },
        background: colors.backdrop,
        zIndex: '6',
    },
});

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const { pathname } = useLocation();
    const isAuthPages =
        pathname === '/login' || pathname === '/signup' || pathname === '/reset-password';

    const toggleMenuHandler = () => {
        setOpenMenu((open) => !open);
    };
    const closeMenu = () => {
        if (!openMenu) return;
        setOpenMenu(false);
    };

    return (
        <>
            <header {...stylex.props(style.header, openMenu && style.headerOpen)} id='header'>
                <Container>
                    <nav {...stylex.props(style.nav)}>
                        <Link to='/' {...stylex.props(style.mobileLogo)} onClick={closeMenu}>
                            <img src={Logo} alt='Assembly logo' />
                        </Link>
                        <Link to='/' {...stylex.props(style.logo)}>
                            {isAuthPages === true ? (
                                <img src={LogoDark} alt='Assembly logo' />
                            ) : (
                                <img src={Logo} alt='Assembly logo' />
                            )}
                        </Link>

                        <button {...stylex.props(style.menuBtn)} onClick={toggleMenuHandler}>
                            <HiBars3BottomRight />
                        </button>

                        <ul {...stylex.props(style.list, openMenu && style.listOpen)}>
                            <li>
                                <Link
                                    to='/sales'
                                    {...stylex.props(style.navLink)}
                                    onClick={closeMenu}
                                >
                                    Apply as Talent
                                </Link>
                            </li>
                            <li {...stylex.props(style.listItem)}>
                                <Link
                                    to='/signup'
                                    {...stylex.props(style.navLink, style.navBtn)}
                                    onClick={closeMenu}
                                >
                                    Sign up
                                </Link>
                                <Link
                                    onClick={closeMenu}
                                    to='/login'
                                    {...stylex.props(style.navLink, style.navBtn, style.signinBtn)}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
            {openMenu && <div {...stylex.props(style.backdrop)} onClick={closeMenu}></div>}
        </>
    );
};

export default Header;
