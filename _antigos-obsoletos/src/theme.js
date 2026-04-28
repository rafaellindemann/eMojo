// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // sua cor principal
    },
    secondary: {
      main: '#ffff00', // sua cor secundária
    },
    success: {
      main: '#4caf50', // cor de sucesso
    },
    error: {
      main: '#f44336', // cor de erro
    },
    warning: {
      main: '#ff9800', // cor de aviso
    },
    info: {
      main: '#2196f3', // cor de informação
    },
    background: {
      default: '#f5f5f5', // cor de fundo padrão
    },
    text: {
      primary: '#212121', // cor do texto primário
      secondary: '#757575', // cor do texto secundário
    },
  },
});

export default theme;