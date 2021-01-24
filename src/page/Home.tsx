import Body from "../component/Body";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import useGameplay from "../lib/useGameplay";

const Home = () => {
    useGameplay();

    return (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
            <Sidebar />
            <div
                style={{
                    flex: 1,
                    backgroundColor: "#c5c3c6",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default Home;
