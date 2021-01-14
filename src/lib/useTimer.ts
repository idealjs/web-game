import { createContext, useContext, useEffect, useRef } from "react";

import Timer, { IListenerProps,TIMER_EVENT } from "./Timer";

export const timerContext = createContext(new Timer({ interval: 1000 }));

const useTimer = <T extends Function>(callback: T) => {
    const savedCallback = useRef<T>(callback);
    useEffect(() => {
        savedCallback.current = callback;
    });
    const timer = useContext(timerContext);
    useEffect(() => {
        const tick = (listenerProps: IListenerProps) => {
            savedCallback.current(listenerProps);
        };
        timer.addListener(TIMER_EVENT.TICK, tick);
        return () => {
            timer.removeListener(TIMER_EVENT.TICK, tick);
        };
    }, [timer]);
};

export default useTimer;
