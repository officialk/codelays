const setTheme = (color) =>{
    document.documentElement.style.setProperty('--primary', color);
}

export { setTheme };