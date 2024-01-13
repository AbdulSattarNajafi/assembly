import * as stylex from '@stylexjs/stylex';

export const typography = stylex.create({
    heading1: {
        fontSize: {
            default: '36px',
            '@media (min-width: 768px)': '42px',
            '@media (min-width: 992px)': '58px',
            '@media (min-width: 1200pxpx)': '70px',
        },
        fontWeight: '700',
        lineHeight: '1.2',
    },
    heading2: {
        fontSize: {
            default: '30px',
            '@media (min-width: 768px)': '36px',
            '@media (min-width: 992px)': '42px',
            '@media (min-width: 1200px)': '50px',
        },
        fontWeight: '500',
        lineHeight: '1.3',
    },
    heading3: {
        fontSize: {
            default: '28px',
            '@media (min-width: 768px)': '32px',
            '@media (min-width: 992px)': '36px',
            '@media (min-width: 1200px)': '40px',
        },
        fontWeight: '500',
        lineHeight: '1.3',
    },
    heading4: {
        fontSize: {
            default: '18px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '26px',
            '@media (min-width: 1200px)': '30px',
        },
        fontWeight: '500',
        lineHeight: '1.3',
    },
    textXl: {
        fontSize: {
            default: '1.125rem',
            '@media (min-width: 992px)': '1.5rem',
        },
        lineHeight: '1.3',
    },
    textLg: {
        fontSize: {
            default: '1rem',
            '@media (min-width: 768px)': '1.25rem',
        },
        lineHeight: '1.3',
    },
});
