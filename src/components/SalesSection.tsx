import * as stylex from '@stylexjs/stylex';

const style = stylex.create({
    section: {
        padding: {
            default: '40px 0',
            '@media (min-width: 768px)': '60px',
            '@media (min-width: 992px)': '80px',
            '@media (min-width: 1200px)': '112px 0',
        },
    },
});

const SalesSection = ({ children }: { children: React.ReactNode }) => {
    return <section {...stylex.props(style.section)}>{children}</section>;
};

export default SalesSection;
