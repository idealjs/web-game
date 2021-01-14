import { EventEmitter } from "events";

export enum TIMER_EVENT {
    TICK = "TICK",
}

export interface ITimer {
    interval: number;
}

export interface IListenerProps {
    time: number;
}

declare interface Timer {
    addListener(
        event: TIMER_EVENT.TICK,
        listener: (listenerProps: IListenerProps) => void
    ): this;
    emit(event: TIMER_EVENT.TICK, listenerProps: IListenerProps): boolean;
}

class Timer extends EventEmitter {
    private interval: number;
    private handle: NodeJS.Timeout;

    constructor(timer: ITimer) {
        super();
        this.interval = timer.interval;

        this.handle = setInterval(() => {
            this.emit(TIMER_EVENT.TICK, {
                time: new Date().getTime(),
            });
        }, this.interval);
    }

    public clear() {
        this.removeAllListeners();
        clearInterval(this.handle);
    }
}

export default Timer;
