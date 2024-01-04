import * as stylex from '@stylexjs/stylex';

const style = stylex.create({
    main: {
        flex: '1',
    },
});

const Main = ({ children }: { children: React.ReactNode }) => {
    return <main {...stylex.props(style.main)}>{children}</main>;
};

export default Main;
