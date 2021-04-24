import { createMuiTheme } from '@material-ui/core';
import { typography } from './typography'
import palette from './palette';
import overrides from './overrides';


export const theme = createMuiTheme({
    typography,
    palette,
    overrides
});
