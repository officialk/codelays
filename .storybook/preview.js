import '../public/Styles/globals.css'
import { setTheme } from '../src/controller/ThemeController';
import { pixelValueExtractor } from '../src/controller/ThemeController';

export const decorators = [
  (Story, context) => { 
    let imgsrc = context.args.imageLink;
    pixelValueExtractor(imgsrc).then((rgbValue)=>{
      setTheme(rgbValue);
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