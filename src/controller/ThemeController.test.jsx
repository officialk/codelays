import { setSecondary } from "./ThemeController";

describe("ThemeController", () => {

    it('Checks if setSeconadry returns white color when black(r,g,b) color is passed', () => {
        let r=0,g=0,b=0;
        let color = setSecondary(r,g,b);
        expect(color).toBe('#ffffff');
    });
    it('Checks if setSeconadry returns black color when white(r,g,b) color is passed', () => {
        let r=255,g=255,b=255;
        let color = setSecondary(r,g,b);
        expect(color).toBe('#000000');
    });
    it('Checks if setSeconadry returns black color when light pink(r,g,b) color is passed', () => {
        let r=255,g=192,b=203;
        let color = setSecondary(r,g,b);
        expect(color).toBe('#000000');
    });
    it('Checks if setSeconadry returns black color when dark pink(r,g,b) color is passed', () => {
        let r=224,g=17,b=95;
        let color = setSecondary(r,g,b);
        expect(color).toBe('#ffffff');
    });
})