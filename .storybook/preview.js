import '../public/Styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '../src/Theme/Theme';
import { setTheme } from '../src/controller/ThemeController';

export const decorators = [
  (Story, context) => { 
    const { color } = context.args;
    setTheme(color);
    return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )},
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}