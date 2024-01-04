import * as stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import Logo from './../assets/icons/logo.svg';

const style = stylex.create({
    header: {
        position: 'absolute',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'transparent',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
    },
    logo: {
        display: 'inline-block',
        maxWidth: '210px',
        width: '100%',
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    navLink: {
        display: 'inline-block',
        color: '#FFF',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '1.68px',
        textTransform: 'uppercase',
        lineHeight: '1.5',
        padding: '11px 22px',
    },

    navBtn: {
        border: '1px solid #4F59CC',
        backgroundColor: '#4F59CC',
        borderRadius: '35px',
    },
    signinBtn: {
        borderColor: '#fff',
        backgroundColor: 'transparent',
    },
});

const Header = () => {
    return (
        <header {...stylex.props(style.header)}>
            <Container>
                <nav {...stylex.props(style.nav)}>
                    <Link to='/' {...stylex.props(style.logo)}>
                        <img src={Logo} alt='Assembly logo' />
                    </Link>

                    <ul {...stylex.props(style.list)}>
                        <li>
                            <Link to='/sales' {...stylex.props(style.navLink)}>
                                Apply as Talent
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup' {...stylex.props(style.navLink, style.navBtn)}>
                                Sign up
                            </Link>
                        </li>
                        <li>
                            <Link
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
    );
};

export default Header;
