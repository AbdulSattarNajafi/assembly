import * as stylex from '@stylexjs/stylex';
import Container from '../components/Container';
import PricingCard from '../components/PricingCard';
import { typography } from '../styles/typography.stylex';

const style = stylex.create({
    pricing: {
        padding: {
            default: '80px 0',
            '@media (min-width: 1200px)': '95px  0 120px 0',
        },
    },
    title: {
        textAlign: 'center',
        marginBottom: {
            default: '30px',
            '@media (min-width: 768px)': '36px',
            '@media (min-width: 992px)': '52px',
        },
    },
    content: {
        display: 'grid',
        gridTemplateColumns: {
            default: '280px',
            '@media (min-width: 576px)': 'repeat(3, 1fr)',
        },
        justifyContent: 'center',
        gridGap: {
            default: '10px',
            '@media (min-width: 576px)': '16px',
            '@media (min-width: 992px)': '30px',
        },
    },
});

const Pricing = () => {
    return (
        <div {...stylex.props(style.pricing)}>
            <Container>
                <h2 {...stylex.props(typography.heading2, style.title)}>Transparent Pricing</h2>
                <div {...stylex.props(style.content)}>
                    <PricingCard price='25%' text='Of Monthly Billings' />
                    <PricingCard price='$1,200' text='Avg. Monthly Rate' />
                    <PricingCard price='$10- $30/hour' text='Rate Range' />
                </div>
            </Container>
        </div>
    );
};

export default Pricing;
