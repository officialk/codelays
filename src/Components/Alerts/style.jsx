import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "var(--primary)",
        width: "320px",
        borderRadius: "0px 0px 26px 26px"
    },  
    alertsUserImg: {
        height: "90px",
        width: "130px",
        borderRadius: "50%",
        marginLeft: "20px",
        padding: "20px 0"
    },
    alertsText: {
        display: "flex",
        flexDirection: "column",
        margin: "0px 20px"
    },
    alertsTextSpan: {
        color: "var(--secondary)",
        paddingTop: "13px"
    }
});

export { useStyles };