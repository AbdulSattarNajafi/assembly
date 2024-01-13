import * as stylex from '@stylexjs/stylex';

const style = stylex.create({
    container: {
        position: 'relative',
        maxWidth: '1314px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1rem',
        zIndex: '2',
    },
});

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div {...stylex.props(style.container)}>{children}</div>;
};

export default Container;
