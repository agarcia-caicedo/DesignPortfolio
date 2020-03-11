import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f9f4a2',
          },
          secondary: {
            main: '#131c3f',
          },
    },
})

theme = responsiveFontSizes(theme);

export default theme;