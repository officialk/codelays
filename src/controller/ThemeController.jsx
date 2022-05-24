/**
 * setTheme function takes the color as parameter and apply it to the theme color
 * @param {string} color - color to be applied on theme
 * @return {null} 
 */
const setTheme = (color) =>{
    document.documentElement.style.setProperty('--primary', color);
}

/**
 * pixelValueExtractor function extract the pixelData of the image and returns it.
 * @param {string} imgsrc - web adress of the image
 * @return {object} image pixel data 
 */
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
    console.log("ubbjkb"); 

    height =  imgEl.naturalHeight || imgEl.height || imgEl.offsetHeight;
    width =  imgEl.naturalWidth || imgEl.width || imgEl.offsetWidth;
    context.drawImage(imgEl, 0, 0);

    data = context.getImageData(0, 0, width, height);
    return data;
}

/**
 * extractThemeFromImage takes imageData as Parameter and returns the rgb value of the image and if the data is undefined(error in image data or fetching image) then the default color(red) will be returned.
 * @param {Object} data - image pixel data
 * @return {number[]} [r,g,b]
 */
const extractThemeFromImage = ( data ) => {
    // handles defaults if data is undefined
    var defaultRGB = [255,0,0];
    
    if(data == undefined){
    return defaultRGB;
    }    
    
    var rgb = [0,0,0],
    blockSize = 5,         
    i = -4,
    count = 0,
    length = data.data.length;
    // print
    console.log(length);
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

/**
 * arrayToCSSColor takes the rgb array as parameter and returns the CSS readable rgb format
 * @param {number[]} rgb - [r,g,b]
 * @return {string} css readable rgb value
 */
const arrayToCSSColor = ( rgb ) => 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';


export { setTheme, pixelValueExtractor, extractThemeFromImage, arrayToCSSColor };