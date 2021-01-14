import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
    Button: {
        textAlign: "center",
        cursor: "pointer",
        color: "#c5c3c6",
        marginTop: "18px",
        "&:hover": {
            color: "#dcdcdd",
        },
    },
});

export default useStyles;
