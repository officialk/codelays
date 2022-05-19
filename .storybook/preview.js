import '../public/Styles/globals.css'
import { setTheme } from '../src/controller/ThemeController';
import { pixelValueExtractor, extractThemeFromImage, arrayToCSSColor } from '../src/controller/ThemeController';

export const decorators = [
  (Story, context) => { 
    let imgsrc = "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933";
    // let imgsrc = context.args.imageLink;
    pixelValueExtractor(imgsrc)
    .then((imgData)=>{
      console.log(imgData);
      let rgb = extractThemeFromImage(imgData);
      let color = arrayToCSSColor(rgb);
      console.log(color);
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