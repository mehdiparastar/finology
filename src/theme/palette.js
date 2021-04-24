import { colors } from '@material-ui/core';

const white = '#FFFFFF';

const palette = {
  white,
  topBar: {
    main: colors.indigo[900],
    secondary: colors.indigo[900]
  },
  primarySelected: {
    main: colors.blue[200]
  },
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.yellow[900],
    main: colors.yellow['A400'],
    light: colors.yellow['A400']
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
};

export default palette