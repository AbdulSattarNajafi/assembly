import * as stylex from '@stylexjs/stylex';

const style = stylex.create({
    app: {
        color: 'red',
        fontSize: '40px',
    },
});

const App = () => {
    return <div {...stylex.props(style.app)}>App</div>;
};

export default App;
