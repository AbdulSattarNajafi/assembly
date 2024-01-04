import * as stylex from '@stylexjs/stylex';

type PropsType = {
    title: string;
    description: string;
    variant: 'light' | 'dark' | 'darker';
};

const style = stylex.create({
    skills: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    skillsHighlight: {
        width: '15px',
        height: '86px',
        borderRadius: '10px',
    },
    light: {
        background: 'rgba(79, 89, 204, 0.30)',
    },
    dark: {
        background: 'rgba(79, 89, 204, 0.60)',
    },
    darker: {
        background: '#4F59CC',
    },
    skillsTitle: {
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '1.2',
    },
    skillsText: {
        fontSize: '27px',
        color: '#868686',
        lineHeight: '1.2',
    },
});

const Skills = ({ title, description, variant }: PropsType) => {
    return (
        <div {...stylex.props(style.skills)}>
            <div {...stylex.props(style.skillsHighlight, style[variant])}></div>
            <div>
                <h5 {...stylex.props(style.skillsTitle)}>{title}</h5>
                <p {...stylex.props(style.skillsText)}>{description}</p>
            </div>
        </div>
    );
};

export default Skills;
