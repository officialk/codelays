// setSecondary takes the rgb value of background as parameter and returns the text color
// @params {array}
// @return {string}
const setSecondary = rgb => (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 > 125 ? '#000000' : '#ffffff';

export {setSecondary};