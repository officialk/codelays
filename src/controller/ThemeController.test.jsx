import { waitFor } from "@testing-library/react";
import { pixelValueExtractor, extractThemeFromImage, arrayToCSSColor } from "./ThemeController";

describe("ThemeController", () => {

    it('Checks ', () => {
        let imgsrc = "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933";
        let imgData = pixelValueExtractor(imgsrc);;
        expect(imgData).not.toBe(undefined);
    });
    it('Checks 2', async () => {
        let imgsrc = "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933";
        await waitFor(()=>{

            let data = pixelValueExtractor(imgsrc);
            expect(data).toBe({data: "d"})        
        })
    });
})