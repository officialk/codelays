export const setTheme = (color) =>{
    document.documentElement.style.setProperty('--theme-color', color);
}

export const getAverageRGB = (imgsrc) =>{
    let imgEl = document.createElement("img");
    imgEl.src = imgsrc;
    imgEl.crossOrigin = '';

    var blockSize = 5,
        defaultRGB = {r:0,g:0,b:0},
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:255,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.height || imgEl.offsetHeight || imgEl.naturalHeight;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}