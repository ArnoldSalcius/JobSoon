import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2979ff',
            light: '#75a7ff',
            dark: '#004ecb',
        },
        secondary: {
            main: '#00c853',
            light: '#5efc82',
            dark: '#009624'
        },

    },
    typography: {
        h1: {
            fontSize: '3em',
            fontWeight: '500'
        },
        h2: {
            fontSize: '2.25em',
            fontWeight: '400'
        },
        h3: {
            fontSize: '1.75em'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
});

export default theme;