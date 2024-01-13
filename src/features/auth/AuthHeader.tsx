import * as stylex from '@stylexjs/stylex';
import { typography } from '../../styles/typography.stylex';

type AuthHeaderTypes = {
    title: string;
    subTitle: string;
};

const style = stylex.create({
    title: {
        textAlign: {
            default: 'center',
            '@media (min-width: 768px)': 'left',
        },
        marginBottom: '15px',
    },
    subTitle: {
        textAlign: {
            default: 'center',
            '@media (min-width: 768px)': 'left',
        },
        fontSize: {
            default: '16px',
            '@media (min-width: 768px)': '18px',
        },
        lineHeight: '1.3',
        marginBottom: {
            default: '32px',
            '@media (min-width: 768px)': '46px',
        },
    },
});

const AuthHeader = ({ title, subTitle }: AuthHeaderTypes) => {
    return (
        <>
            <h1 {...stylex.props(typography.heading3, style.title)}>{title}</h1>
            <p {...stylex.props(style.subTitle)}>{subTitle}</p>
        </>
    );
};

export default AuthHeader;
