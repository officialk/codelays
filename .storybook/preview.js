import '../public/Styles/globals.css'
import { setTheme } from '../src/controller/ThemeController';
import { pixelValueExtractor, extractThemeFromImage, arrayToCSSColor } from '../src/controller/ThemeController';

export const decorators = [
  (Story, context) => { 
    let imgsrc = context.args.imageLink;
    pixelValueExtractor(imgsrc)
    .then((length)=>{
      let rgb = extractThemeFromImage(length);
      let color = arrayToCSSColor(rgb);
      setTheme(color);
    });
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