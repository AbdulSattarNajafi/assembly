import { Link } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';

type ButtonPropsType = {
    children: React.ReactNode;
    link: string;
};

const style = stylex.create({
    btn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: '#FFF',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '700',
        letterSpacing: '2.16px',
        textTransform: 'uppercase',
        lineHeight: '1.5',
        padding: '11px 22px',
        border: '1px solid #4F59CC',
        backgroundColor: '#4F59CC',
        borderRadius: '35px',
        boxShadow: '0px 30px 40px -20px rgba(79, 89, 204, 0.60)',
    },
});

const PrimaryButton = ({ children, link }: ButtonPropsType) => {
    return (
        <Link to={link} {...stylex.props(style.btn)}>
            {children}
        </Link>
    );
};

export default PrimaryButton;
