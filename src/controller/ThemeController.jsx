const setTheme = (color) =>{
    document.documentElement.style.setProperty('--primary', color);
}

// pixelValueExtractor takes the link of the image and returns its rgb color
// @params ( web address of the image )
// @return ( imageData )
const pixelValueExtractor = async ( imgsrc ) => {        
    let imgEl = document.createElement("img");
    imgEl.crossOrigin = '';
    imgEl.src = imgsrc;
    var canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height;   
    if (!context) {
        return data;
    }
    let promise = new Promise((resolve)=>{
        imgEl.addEventListener('load', () => {
            resolve(imgEl);
        });
    })
    await promise;
    height =  imgEl.naturalHeight || imgEl.height || imgEl.offsetHeight;
    width =  imgEl.naturalWidth || imgEl.width || imgEl.offsetWidth;
    context.drawImage(imgEl, 0, 0);
    try {       
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        return data;
    }
    return data;
}

// @params ( imageData )
// @return ( rgbValue ) 
const extractThemeFromImage = ( data ) => {
    var defaultRGB = [255,0,0];

    if(data == undefined){
    return defaultRGB;
    }    

    var rgb = [0,0,0],
    blockSize = 5,         
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
    return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
}


export { setTheme, pixelValueExtractor, extractThemeFromImage, arrayToCSSColor };