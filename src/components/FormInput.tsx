import * as stylex from '@stylexjs/stylex';
import { colors } from '../styles/tokens.stylex';

type FormInputTypes = React.ComponentPropsWithRef<'input'>;

const style = stylex.create({
    input: {
        width: '100%',
        backgroundColor: colors.white,
        border: `1px solid ${colors.gray200}`,
        borderRadius: '10px',
        padding: {
            default: '14px 16px',
            '@media (min-width: 576px)': '18px 22px',
        },
        fontSize: {
            default: '16px',
            '@media (min-width: 576px)': '18px',
        },
        color: colors.black,
        lineHeight: '22px',
        '::placeholder': {
            color: colors.gray800,
        },
    },
});

const FormInput = (props: FormInputTypes) => {
    return <input {...props} {...stylex.props(style.input)} />;
};

export default FormInput;
