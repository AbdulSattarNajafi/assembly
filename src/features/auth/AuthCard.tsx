import * as stylex from '@stylexjs/stylex';

import { colors, shadow } from '../../styles/tokens.stylex';

type AuthCardTypes = {
    children: React.ReactNode;
};

const style = stylex.create({
    card: {
        width: '100%',
        background: colors.white,
        border: `2px solid ${colors.light}`,
        borderRadius: '32px',
        padding: '12px',
        boxShadow: shadow.shadow,
    },
});

const AuthCard = ({ children }: AuthCardTypes) => {
    return <div {...stylex.props(style.card)}>{children}</div>;
};

export default AuthCard;
