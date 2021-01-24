import { makeStyles } from "@material-ui/styles";
import {
    Activity,
    Inbox,
    Map,
    Menu,
    Send,
    ShoppingBag,
    Users,
} from "react-feather";

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

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div
            style={{
                width: "60px",
                backgroundColor: "#46494c",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div style={{ flex: 1, marginTop: "12px" }}>
                <div className={classes.Button}>
                    <Users />
                </div>
                <div className={classes.Button}>
                    <Map />
                </div>
                <div className={classes.Button}>
                    <Inbox />
                </div>
                <div className={classes.Button}>
                    <Send />
                </div>
                <div className={classes.Button}>
                    <ShoppingBag />
                </div>
                <div className={classes.Button}>
                    <Activity />
                </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
                <div className={classes.Button}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
