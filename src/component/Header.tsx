import { makeStyles } from "@material-ui/styles";
import { ChevronsRight, FastForward } from "react-feather";

const useStyles = makeStyles({
    Button: {
        textAlign: "center",
        padding: "6px",
        cursor: "pointer",
        color: "#46494c",
        "&:hover": {
            backgroundColor: "#a9a8a9",
        },
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <div style={{ height: "36px", display: "flex" }}>
            <div style={{ height: "100%" }}>
                <div className={classes.Button}>
                    <ChevronsRight />
                </div>
            </div>
            <div style={{ height: "100%", flex: 1 }}></div>
            <div style={{ height: "100%" }}>
                <div className={classes.Button}>
                    <FastForward />
                </div>
            </div>
        </div>
    );
};

export default Header;
