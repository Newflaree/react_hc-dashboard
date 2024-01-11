// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// React Router Dom
import { BrowserRouter } from 'react-router-dom';
// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './theme';
// App
import App from './App.jsx'
// Globals Styles
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ appTheme }>
        <CssBaseline /> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
