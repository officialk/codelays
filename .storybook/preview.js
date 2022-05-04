import '../public/Styles/globals.css'
import { setTheme } from '../src/controller/ThemeController';

export const decorators = [
  (Story, context) => { 
    const { color } = context.args;
    setTheme(color);
    return (
      <Story />
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