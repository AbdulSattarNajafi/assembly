import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { colors } from '../../styles/tokens.stylex';
import AuthHeader from './AuthHeader';

const style = stylex.create({
    form: {
        width: '100%',
    },
    formRow: {
        marginBottom: '10px',
    },
    formButton: {
        paddingTop: '15px',
        paddingBottom: '18px',
    },
    formTexts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {
            default: '10px',
            '@media (min-width: 992px)': '16px',
        },
        textAlign: 'center',
        fontSize: {
            default: '12px',
            '@media (min-width: 576px)': '16px',
            '@media (min-width: 992px)': '18px',
            '@media (min-width: 1200px)': '20px',
        },
        color: colors.grayText,
        lineHeight: '1.4',
    },
    formLink: {
        color: colors.slateBlue,
    },
});

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <AuthHeader
                title='Welcome back!'
                subTitle='We get stuff done for growth stage companies. Under 24 hours. One Flat Monthly Fees.
                Use as Much as you want.'
            />
            <form {...stylex.props(style.form)} onSubmit={submitHandler}>
                <div {...stylex.props(style.formRow)}>
                    <FormInput
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email Address'
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                    />
                </div>
                <div {...stylex.props(style.formRow)}>
                    <FormInput
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={enteredPassword}
                        onChange={(e) => setEnteredPassword(e.target.value)}
                    />
                </div>
                <div {...stylex.props(style.formRow, style.formButton)}>
                    <FormButton>
                        <span>Login</span>
                        <HiArrowSmallRight />
                    </FormButton>
                </div>

                <div {...stylex.props(style.formTexts)}>
                    <p>
                        <span>Forgot Password? </span>
                        <Link to='/reset-password' {...stylex.props(style.formLink)}>
                            Recover Password
                        </Link>
                    </p>
                    <p>
                        <span>Don't have an account? </span>
                        <Link to='/signup' {...stylex.props(style.formLink)}>
                            Sign up for access
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
