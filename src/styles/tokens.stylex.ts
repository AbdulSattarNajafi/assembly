import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
    primaryText: '#000',
    secondaryText: '#333',
    accent: 'blue',
    background: 'white',
    lineColor: 'gray',
    borderRadius: '4px',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '16px',
});

export const spacing = stylex.defineVars({
    none: '0px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '20px',
    xlarge: '32px',
    xxlarge: '48px',
    xxxlarge: '96px',
});
