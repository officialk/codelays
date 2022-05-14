import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "35px",
    width: "270px",
    position: "absolute",
    border: "2px solid red",
    borderRadius: "7px",
    overflow: "hidden"
  },
  rm: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    position: "block",
  },
  icon: {
    width: "30px",
    height: "22px",
    marginLeft: "10px",
  },
  text: {
    fontSize: "18px",
    marginRight: "15px",
    marginLeft: "10px",
  },
  animatedItem: {
    animation: `$bottomToTop 0.3s linear`,
  },
  "@keyframes bottomToTop": {
    "0.2%": {
      transform: "translateY(10px)",
    },
    "20%": {
      transform: "translateY(35px)",
    },
  },
});

export { useStyles };
// comment