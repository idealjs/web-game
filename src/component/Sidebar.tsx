import {
    ADD_PANEL_DATA,
    MASK_PART,
    PanelNode,
    ROOTID,
    SLOT_EVENT,
    useSns,
} from "@idealjs/layout-manager";
import { makeStyles } from "@material-ui/styles";
import { nanoid } from "nanoid";
import { useCallback } from "react";
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
    Tooltip: {
        visibility: "hidden",
        position: "absolute",
        left: "105%",
        background: "#46494c",
        borderRadius: "24px",
        border: "2px solid #8AC007",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "2px",
        zIndex: 1,
    },
    Button: {
        height: "46px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        color: "#c5c3c6",
        "&:hover": {
            color: "#dcdcdd",
            backgroundColor: "#575b5f",
        },
        "&:hover $Tooltip": {
            visibility: "visible",
        },
    },
});

const Sidebar = () => {
    const classes = useStyles();
    const sns = useSns();
    const onClick = useCallback(() => {
        const panelNode = new PanelNode({
            panelJSON: {
                id: nanoid(),
                page: "test",
            },
        });
        const data: ADD_PANEL_DATA = {
            panelNode,
            mask: MASK_PART.RIGHT,
            target: ROOTID,
        };
        sns.send("mainLayout", SLOT_EVENT.ADD_PANEL, data);
    }, [sns]);

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
                <div className={classes.Button} onClick={onClick}>
                    <Users />
                    <span className={classes.Tooltip}>Members</span>
                </div>
                <div className={classes.Button}>
                    <Map />
                    <span className={classes.Tooltip}>Map</span>
                </div>
                <div className={classes.Button}>
                    <Inbox />
                    <span className={classes.Tooltip}>Equipment</span>
                </div>
                <div className={classes.Button}>
                    <Send />
                    <span className={classes.Tooltip}>Aircraft</span>
                </div>
                <div className={classes.Button}>
                    <ShoppingBag />
                    <span className={classes.Tooltip}>Market</span>
                </div>
                <div className={classes.Button}>
                    <Activity />
                    <span className={classes.Tooltip}>Event</span>
                </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
                <div className={classes.Button}>
                    <Menu />
                    <span className={classes.Tooltip}>Menu</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
