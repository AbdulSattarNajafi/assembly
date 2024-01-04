import * as stylex from '@stylexjs/stylex';

type PropsType = {
    price: string;
    text: string;
};

const style = stylex.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        border: '3px solid #EFEFEF',
        borderRadius: '40px',
        padding: '32px 16px',
        textAlign: 'center',
        boxShadow: '0px 14px 34px -10px rgba(0, 0, 0, 0.10)',
    },
    title: {
        color: '#4F59CC',
        fontSize: '45px',
        fontWeight: '700',
        lineHeight: '1.3',
        marginBottom: '5px',
    },
    text: {
        color: '#000',
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '1.3',
    },
});

const PricingCard = ({ price, text }: PropsType) => {
    return (
        <div {...stylex.props(style.card)}>
            <h5 {...stylex.props(style.title)}>{price}</h5>
            <p {...stylex.props(style.text)}>{text}</p>
        </div>
    );
};

export default PricingCard;
