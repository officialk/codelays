const setTheme = (color) =>{
    document.documentElement.style.setProperty('--primary', color);
}

// pixelValueExtractor takes the link of the image and returns its rgb color
const pixelValueExtractor = ( imgsrc ) => {
    return new Promise((resolve)=>{
        
        let imgEl = document.createElement("img");
        imgEl.crossOrigin = '';
        imgEl.src = imgsrc;
        var defaultRGB = [255,0,0],
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        rgb = [0, 0, 0];     
    
        if (!context) {
            return arrayToCSSColor( rgb );
        }
    
        imgEl.onload = async ()=>{
            height =  imgEl.naturalHeight || imgEl.height || imgEl.offsetHeight;
            width =  imgEl.naturalWidth || imgEl.width || imgEl.offsetWidth;
            
            context.drawImage(imgEl, 0, 0);
            try {        
                data = context.getImageData(0, 0, width, height);
            } catch(e) {
                console.log(e);
                return arrayToCSSColor( defaultRGB );
            }
            let fetchedRGB = extractThemeFromImage( rgb, data );
            const color = arrayToCSSColor( fetchedRGB );
            resolve(color);
        }            
    })
}

const extractThemeFromImage = (rgb, data) => {   
    var blockSize = 5,         
    i = -4,
    count = 0,
    length = data.data.length;
                
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb[0] += data.data[i];
        rgb[1] += data.data[i+1];
        rgb[2] += data.data[i+2];
    }
    rgb[0] = ~~(rgb[0]/count);
    rgb[1] = ~~(rgb[1]/count);
    rgb[2] = ~~(rgb[2]/count);
            
    return rgb;
}

const arrayToCSSColor = ( rgb ) => {
    const color = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
    return color;
}

export { setTheme, pixelValueExtractor, extractThemeFromImage, arrayToCSSColor };