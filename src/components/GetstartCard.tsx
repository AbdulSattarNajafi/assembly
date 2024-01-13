import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { colors, shadow } from '../styles/tokens.stylex';

type GetstartCardProps = {
    children: React.ReactNode;
    title: [string, string];
    style?: stylex.StyleXStyles;
};

const styles = stylex.create({
    card: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    cardHeader: {
        paddingBottom: {
            default: '10px',
            '@media (min-width: 768px)': '15px',
        },
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: {
            default: '1.25rem',
            '@media (min-width: 768px)': '1.5rem',
        },
        textWrap: 'balance',
        color: colors.white,
        fontWeight: '700',
    },
    cardBody: {
        position: 'relative',
        flex: '1',
        width: '100%',
        background: colors.white,
        border: `3px solid ${colors.light}`,
        borderRadius: '21px',
        padding: {
            default: '10px',
            '@media (min-width: 1200px)': '23px 18px',
        },
        boxShadow: shadow.shadowMd,
        overflow: 'hidden',
    },
});

const GetstartCard = ({ children, title, style }: GetstartCardProps) => {
    return (
        <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardHeader)}>
                <h5 {...stylex.props(styles.cardTitle)}>
                    {title[0]}
                    <br />
                    {title[1]}
                </h5>
            </div>
            <div {...stylex.props(styles.cardBody, style)}>{children}</div>
        </div>
    );
};

export default GetstartCard;
