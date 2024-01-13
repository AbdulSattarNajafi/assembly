import * as stylex from '@stylexjs/stylex';

import DashboardImage from './../assets/images/dashboard.png';
import ArrowDown from './../assets/icons/arrow-down.svg';
import HiringIcon from './../assets/icons/search-users.svg';
import TaskIcon from './../assets/icons/office-bag.svg';
import PaymentIcon from './../assets/icons/payment.svg';
import AuthCard from '../features/auth/AuthCard';
import { colors } from '../styles/tokens.stylex';

const style = stylex.create({
    cardRow: {
        display: 'grid',
        gridTemplateColumns: '67px 90px 67px',
        gap: '4px',
    },
    cardInfo: {
        background: colors.yellow100,
        borderRadius: '12px',
        textAlign: 'center',
        padding: '5px',
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '1.6',
        color: colors.black,
    },
    cardTask: {
        background: colors.green100,
    },
    cardPayment: {
        background: colors.pink100,
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
        width: '100%',
        height: '44px',
        background: colors.white,
        borderRadius: '8px',
        marginBottom: '6px',
    },
    cardImg: {
        width: '100%',
        height: 'auto',
        borderRadius: '6px',
    },
});

const PlatformCard = () => {
    return (
        <AuthCard>
            <div {...stylex.props(style.cardRow)}>
                <div>
                    <div {...stylex.props(style.cardInfo)}>
                        <div {...stylex.props(style.cardImage)}>
                            <img src={HiringIcon} alt='Search Users icon' />
                        </div>
                        <p>Hiring</p>
                    </div>
                    <div {...stylex.props(style.cardInfoFooter)}>
                        <img src={ArrowDown} alt='Arrow Down' />
                    </div>
                </div>

                <div>
                    <div {...stylex.props(style.cardInfo, style.cardTask)}>
                        <div {...stylex.props(style.cardImage)}>
                            <img src={TaskIcon} alt='Office-bag icon' />
                        </div>
                        <p>Task Delegation</p>
                    </div>
                    <div {...stylex.props(style.cardInfoFooter)}>
                        <img src={ArrowDown} alt='Arrow Down' />
                    </div>
                </div>

                <div>
                    <div {...stylex.props(style.cardInfo, style.cardPayment)}>
                        <div {...stylex.props(style.cardImage)}>
                            <img src={PaymentIcon} alt='Payment icon' />
                        </div>
                        <p>Payment</p>
                    </div>
                    <div {...stylex.props(style.cardInfoFooter)}>
                        <img src={ArrowDown} alt='Arrow Down' />
                    </div>
                </div>
            </div>

            <div>
                <img
                    src={DashboardImage}
                    alt='Assembly Dashboard'
                    {...stylex.props(style.cardImg)}
                />
            </div>
        </AuthCard>
    );
};

export default PlatformCard;
