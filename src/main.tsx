import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './providers/theme-service';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
