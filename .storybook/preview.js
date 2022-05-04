import '../public/Styles/globals.css'
import { setTheme } from '../src/controller/ThemeController';
import { pixelValueExtractor } from '../src/controller/ThemeController';

export const decorators = [
  (Story) => { 
    let imgsrc = "https://static-cdn.jtvnw.net/jtv_user_pictures/94c799bc-eaf6-4d1c-9ba6-6c85e45930eb-profile_image-70x70.png";
    let rgb = pixelValueExtractor(imgsrc);
    setTheme(rgb);
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