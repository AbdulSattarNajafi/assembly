import * as stylex from '@stylexjs/stylex';
import Container from '../components/Container';
import PricingCard from '../components/PricingCard';

const style = stylex.create({
    pricing: {
        paddingTop: '95px',
        paddingBottom: '122px',
    },
    title: {
        textAlign: 'center',
        fontSize: '50px',
        fontWeight: '500',
        lineHeight: '1.3',
        marginBottom: '52px',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '30px',
    },
});

const Pricing = () => {
    return (
        <div {...stylex.props(style.pricing)}>
            <Container>
                <h3 {...stylex.props(style.title)}>Transparent Pricing</h3>
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
