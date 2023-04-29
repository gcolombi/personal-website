import { useCallback, useEffect, useRef } from 'react';

export default function useIsMounted() {
    /* Unmounted by default */
    const isMounted = useRef(false);

    useEffect(() => {
        /* Mounted */
        isMounted.current = true;

        return () => {
            /* Unmounted */
            isMounted.current = false;
        }
    }, []); /* Empty array ensures that effect is only run on mount */

    /* return function that checks mounted status */
    return useCallback(() => isMounted.current, []);
}