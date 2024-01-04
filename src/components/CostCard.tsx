import * as stylex from '@stylexjs/stylex';

type PropsType = {
    description: string;
    price: string;
    isActive?: boolean;
};

const style = stylex.create({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        textAlign: 'center',
        background: '#fff',
        border: '1px solid #EFEFEF',
        borderRadius: '23px',
        color: '#B0B0B0',
        padding: '1rem',
    },
    description: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.4',
        marginBottom: '6px',
    },
    price: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.2',
    },
    active: {
        color: '#000',
        borderColor: '#000',
        boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.15)',
    },
});

const CostCard = ({ description, price, isActive }: PropsType) => {
    return (
        <div {...stylex.props(style.card, isActive && style.active)}>
            <div>
                <h4 {...stylex.props(style.description)}>
                    {description} <br /> Monthly Cost
                </h4>
                <h5 {...stylex.props(style.price)}>${price} / month</h5>
            </div>
        </div>
    );
};

export default CostCard;
