import * as stylex from '@stylexjs/stylex';
import GetstartCard from './GetstartCard';
import { colors } from '../styles/tokens.stylex';

const style = stylex.create({
    cardTitle: {
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1.2',
    },
    cardList: {
        paddingLeft: '1rem',
        color: colors.gray800,
        fontWeight: '700',
        lineHeight: '25px',
        margin: '22px 0 24px 10px',
    },
    cardBadget: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.2',
    },
});

const SupportCard = () => {
    return (
        <GetstartCard title={['Tell us what', 'you need done']}>
            <h5 {...stylex.props(style.cardTitle)}>
                DTC Brand Looking <br /> for Q4 Support:
            </h5>
            <ul {...stylex.props(style.cardList)}>
                <li>&bull; Shopify Dev.</li>
                <li>&bull; Paid Media</li>
                <li>&bull; Graphic Design</li>
                <li>&bull; Customer Support</li>
                <li>&bull; Data Analyst</li>
            </ul>
            <h6 {...stylex.props(style.cardBadget)}>Budget: $3K/Month</h6>
        </GetstartCard>
    );
};

export default SupportCard;
