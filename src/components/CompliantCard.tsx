import * as stylex from '@stylexjs/stylex';

import DealIcon from './../assets/icons/deal.svg';
import InvoiceIcon from './../assets/icons/invoice.svg';
import ArrowIcon from './../assets/icons/double-arrow.svg';
import AuthCard from '../features/auth/AuthCard';
import { colors } from '../styles/tokens.stylex';

const style = stylex.create({
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(./map.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        gap: '34px',
        paddingTop: '11px',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: '700',
        lineHeight: '1.3',
    },
    blueText: {
        color: colors.slateBlue,
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '8px',
    },
    cardInfo: {
        background: colors.lightBlue,
        borderRadius: '12px',
        padding: '5px',
    },
    cardInfoFooter: {
        display: 'flex',
        justifyContent: 'center',
        padding: '6px',
    },
    cardImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '58px',
        height: '60px',
        background: colors.white,
        borderRadius: '8px',
    },
});

const CompliantCard = () => {
    return (
        <AuthCard>
            <div {...stylex.props(style.cardContent)}>
                <h4 {...stylex.props(style.cardTitle)}>
                    <span>Compliant across</span>
                    <br />
                    <span {...stylex.props(style.blueText)}>180+ Countries</span>
                </h4>
                <div>
                    <img src={ArrowIcon} alt='Arrow icon' />
                </div>
            </div>

            <div {...stylex.props(style.cardRow)}>
                <div {...stylex.props(style.cardInfo)}>
                    <div {...stylex.props(style.cardImage)}>
                        <img src={DealIcon} alt='Deal icon' />
                    </div>
                </div>
                <div {...stylex.props(style.cardInfo)}>
                    <div {...stylex.props(style.cardImage)}>
                        <img src={InvoiceIcon} alt='Invoice icon' />
                    </div>
                </div>
            </div>
        </AuthCard>
    );
};

export default CompliantCard;
