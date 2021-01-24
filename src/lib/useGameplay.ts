import { useCallback } from "react";

import useTimer from "./useTimer";

const useGameplay = () => {
    const gameplay = useCallback(() => {
        console.debug("gameplay tick");
    }, []);
    useTimer(gameplay);
};

export default useGameplay;
