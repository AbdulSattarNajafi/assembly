import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
    black: '#000000',
    white: '#ffffff',
    whiteOverlay: 'rgba(255, 255, 255, 0.8)',
    light: '#EFEFEF',
    light50: '#E3E3E3',
    light100: '#eeeeee',
    light200: '#F6F6F6',
    light300: '#E8E8F5',
    light400: '#E8E8E9',
    light500: '#D5D5D5',
    light600: '#D6D6D6',
    light700: '#F3F3F3',
    secondaryText: '#333333',
    slateBlue: '#4F59CC',
    lightBlue: '#DBEAFD',
    grayText: '#A6A6A6',
    gray100: '#CECECE',
    gray200: '#D0D0D0',
    gray500: '#5E5E5E',
    gray600: '#B0B0B0',
    gray700: '#717171',
    gray800: '#878787',
    menuStroke: '#333333',
    stars: '#FFC226',
    yellow100: '#F4F1C0',
    green100: '#CDE6D9',
    pink100: '#E4D6EE',
    backdrop: 'rgba(170, 170, 170, 0.6)',
    talentCardBg:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), lightgray 50% ',
});

export const shadow = stylex.defineVars({
    shadow: '0px 11.841px 28.757px -8.458px rgba(0, 0, 0, 0.10)',
    shadowSm: '0px 2.382px 32.153px 0px rgba(0, 0, 0, 0.10)',
    shadowMd: '0px 14px 34px -10px rgba(0, 0, 0, 0.10)',
    shadowLg: '0px 4px 24px 0px rgba(0, 0, 0, 0.15)',
    shadowAround: '0px 2.024px 27.322px 0px rgba(0, 0, 0, 0.10)',
    shadowBlue: '0px 30px 40px -20px rgba(79, 89, 204, 0.60)',
});
