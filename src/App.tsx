import { useMemo } from "react";
import { useSelector } from "react-redux";

import Timer from "./lib/Timer";
import { timerContext } from "./lib/useTimer";
import Home from "./page/Home";
import { RootState } from "./reducer";

function App() {
    const timerProps = useSelector((s: RootState) => s.timer);
    const timer = useMemo(() => new Timer(timerProps), [timerProps]);
    return (
        <div
            className="App"
            style={{ height: "100vh", width: "100vw", minHeight: "480px" }}
        >
            <timerContext.Provider value={timer}>
                <Home />
            </timerContext.Provider>
        </div>
    );
}

export default App;
