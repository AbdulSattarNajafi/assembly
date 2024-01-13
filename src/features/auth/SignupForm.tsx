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
    formRowFlex: {
        display: 'flex',
        flexDirection: {
            default: 'column',
            '@media (min-width: 576px)': 'row',
            '@media (min-width: 768px)': 'column !important',
            '@media (min-width: 992px)': 'row !important',
        },
        gap: '10px',
    },
    formRow: {
        marginBottom: '10px',
    },
    formRowItem: {
        flex: '1',
    },
    formCheckbox: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
    },
    checkboxWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '13px',
        fontSize: {
            default: '12px',
            '@media (min-width: 576px)': '16px',
            '@media (min-width: 992px)': '18px',
            '@media (min-width: 1200px)': '20px',
        },
        color: colors.grayText,
        lineHeight: '26px',
    },
    checkbox: {
        width: '20px',
        height: '20px',
        background: colors.white,
        border: `1px solid ${colors.gray200}`,
        borderRadius: '6px',
    },
    formButton: {
        paddingTop: '10px',
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

const SignupForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredCompanyName, setEnteredCompanyName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <AuthHeader
                title='Get access to our platform!'
                subTitle='We get stuff done for growth stage companies. Under 24 hours. One Flat Monthly Fees.
                Use as Much as you want.'
            />
            <form {...stylex.props(style.form)} onSubmit={submitHandler}>
                <div {...stylex.props(style.formRowFlex)}>
                    <div {...stylex.props(style.formRow, style.formRowItem)}>
                        <FormInput
                            type='text'
                            name='first-name'
                            id='first-name'
                            placeholder='First Name'
                            value={enteredName}
                            onChange={(e) => setEnteredName(e.target.value)}
                        />
                    </div>
                    <div {...stylex.props(style.formRow, style.formRowItem)}>
                        <FormInput
                            type='text'
                            name='last-name'
                            id='last-name'
                            placeholder='Last Name'
                            value={enteredLastName}
                            onChange={(e) => setEnteredLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div {...stylex.props(style.formRow)}>
                    <FormInput
                        type='text'
                        name='company-name'
                        id='company-name'
                        placeholder='Company Name'
                        value={enteredCompanyName}
                        onChange={(e) => setEnteredCompanyName(e.target.value)}
                    />
                </div>
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
                <div {...stylex.props(style.formCheckbox)}>
                    <div {...stylex.props(style.checkboxWrapper)}>
                        <input type='checkbox' id='news-letter' {...stylex.props(style.checkbox)} />
                        <label htmlFor='news-letter'>Sign me up for Assembly's newsletter!</label>
                    </div>
                </div>
                <div {...stylex.props(style.formRow, style.formButton)}>
                    <FormButton>
                        <span>Signup</span>
                        <HiArrowSmallRight />
                    </FormButton>
                </div>

                <div {...stylex.props(style.formTexts)}>
                    <p>
                        <span>Already have an account? </span>
                        <Link to='/login' {...stylex.props(style.formLink)}>
                            Login
                        </Link>
                    </p>
                    <p>
                        <span>Really want access? Send us a note at </span> <br />
                        <a
                            href='mailto:hello@assembly-industries.com'
                            {...stylex.props(style.formLink)}
                        >
                            hello@assembly-industries.com
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
};

export default SignupForm;
