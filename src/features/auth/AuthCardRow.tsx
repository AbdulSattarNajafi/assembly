import * as stylex from '@stylexjs/stylex';

import { colors } from '../../styles/tokens.stylex';

type AuthCardRowTypes = {
    title: string;
    children: React.ReactNode;
};

const style = stylex.create({
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: {
            default: 'column-reverse',
            '@media (min-width: 992px)': 'row',
        },
        gap: {
            default: '10px',
            '@media (min-width: 1200px)': '30px',
        },
    },
    card: {
        width: '260px',
    },
    title: {
        flex: '1',
        textAlign: {
            default: 'center',
            '@media (min-width: 992px)': 'left',
        },
        textWrap: 'balance',
        color: colors.white,
        fontSize: {
            default: '18px',
            '@media (min-width: 1200px)': '21px',
        },
        fontWeight: '700',
    },
});

const AuthCardRow = ({ title, children }: AuthCardRowTypes) => {
    return (
        <div {...stylex.props(style.row)}>
            <div {...stylex.props(style.card)}>{children}</div>
            <h4 {...stylex.props(style.title)}>{title}</h4>
        </div>
    );
};

export default AuthCardRow;
