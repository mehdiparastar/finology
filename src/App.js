import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { theme } from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {renderRoutes(routes)}
      </ThemeProvider>
    </Router>
  );
}

export default App;
