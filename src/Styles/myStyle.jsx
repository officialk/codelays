import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    theme: {
      backgroundColor: 'var(--bg-color)',
    },
  });
setTimeout(()=>{
    document.documentElement.style.setProperty('--bg-color', "orange");
}, 4000)

export { useStyles };