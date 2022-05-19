/**
 * setSecondary sets the secondary color on the basis of r,g,b values of primary color passed
 * @param {number} r - value of r of primary color
 * @param {number} g - value of g of primary color
 * @param {number} b - value of b of primary color
 * @return {String} - returns white of black color's hex value 
 */
const setSecondary = (r, g, b) => (r * 299 + g * 587 + b * 114) / 1000 > 125 ? '#000000' : '#ffffff';

export {setSecondary};