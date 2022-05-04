// pixelValueExtractor takes the link of the image and returns its rgb color
const pixelValueExtractor = ( imgsrc ) => {
    let imgEl = document.createElement("img");
    imgEl.src = imgsrc;
    imgEl.crossOrigin = '';
    const rgb = extractThemeFromImage(imgEl);
    return rgb;
}

function extractThemeFromImage(imgEl){
    var blockSize = 5,
        defaultRGB = [255,0,0],
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = [255, 0, 0],
        count = 0;

    if (!context) {
        return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[1]+')';
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.height || imgEl.offsetHeight;
    width = canvas.width = imgEl.naturalWidth || imgEl.width || imgEl.offsetWidth;
        
    context.drawImage(imgEl, 0, 0);
    
    try {        
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        return defaultRGB;
    }
        
        length = data.data.length;
        
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb[0] += data.data[i];
        rgb[1] += data.data[i+1];
        rgb[2] += data.data[i+2];
    }

    const color = arrayToCSSColor( rgb, count);
    return color;
}

function arrayToCSSColor( rgb, count ) {
    rgb[0] = ~~(rgb[0]/count);
    rgb[1] = ~~(rgb[1]/count);
    rgb[2] = ~~(rgb[2]/count);
    
    const color = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[1]+')';
    return color;
}

export { pixelValueExtractor, extractThemeFromImage, arrayToCSSColor };