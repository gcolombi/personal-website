import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Size {
    width: number | undefined;
    height: number | undefined;
}

interface WindowSize {
    windowSize: Size;
    isMobile: boolean;
    isDesktop: boolean;
}

export default function useWindowSize(): WindowSize {
    /* Initialize state with undefined width/height so server and client renders match */
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined
    });

    /* Handler to call on window resize */
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useIsomorphicLayoutEffect(() => {
        /* Add event listener */
        window.addEventListener('resize', handleResize);

        /* Call handler right away so state gets updated with initial window size */
        handleResize();

        /* Remove event listener on cleanup */
        return () => window.removeEventListener('resize', handleResize);
    }, []); /* Empty array ensures that effect is only run on mount */

    return {
        windowSize,
        isMobile: typeof windowSize?.width === 'number' && windowSize?.width < 991,
        isDesktop: typeof windowSize?.width === 'number' && windowSize?.width >= 991
    };
}