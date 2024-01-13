import * as stylex from '@stylexjs/stylex';
import { colors } from '../styles/tokens.stylex';

type SkillsTypes = {
    title: string;
    description: string;
    variant: 'light' | 'dark' | 'darker';
};

const style = stylex.create({
    skills: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        width: {
            default: '280px',
            '@media (min-width: 768px)': '320px',
            '@media (min-width: 992px)': 'auto',
        },
    },
    skillsHighlight: {
        width: {
            default: '10px',
            '@media (min-width: 768px)': '12px',
            '@media (min-width: 992px)': '15px 0',
        },
        height: {
            default: '66px',
            '@media (min-width: 768px)': '76px',
            '@media (min-width: 992px)': '86px',
        },
        borderRadius: '10px',
    },
    light: {
        background: 'rgba(79, 89, 204, 0.30)',
    },
    dark: {
        background: 'rgba(79, 89, 204, 0.60)',
    },
    darker: {
        background: colors.slateBlue,
    },
    skillsTitle: {
        fontSize: {
            default: '30px',
            '@media (min-width: 768px)': '32px',
            '@media (min-width: 992px)': '40px',
        },
        fontWeight: '500',
        lineHeight: '1.2',
    },
    skillsText: {
        fontSize: {
            default: '20px',
            '@media (min-width: 768px)': '22px',
            '@media (min-width: 992px)': '27px',
        },
        color: colors.gray800,
        lineHeight: '1.2',
    },
});

const Skills = ({ title, description, variant }: SkillsTypes) => {
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
