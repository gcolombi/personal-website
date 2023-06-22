import { useState, useCallback } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Scrollbar {
    scrollY: number;
    scrollX: number;
    directionY: number;
    directionX: number;
}

export default function useScrollbar(): Scrollbar {
    const [scrollbar, setScrollbar] = useState<Scrollbar>({
        scrollY: 0,
        scrollX: 0,
        directionY: -1,
        directionX: -1
    });

    const updateScrollbar = useCallback(() => {
        setScrollbar((prevState) => {
            const prevScrollY = prevState.scrollY;
            const prevScrollX = prevState.scrollX;

            return {
                scrollY: window.scrollY,
                scrollX: window.scrollX,
                directionY: prevScrollY < window.scrollY ? 1 : -1,
                directionX: prevScrollX < window.scrollX ? 1 : -1
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollbar?.scrollY, scrollbar?.scrollX, scrollbar?.directionY, scrollbar?.directionX]);

    useIsomorphicLayoutEffect(() => {
        /* Add event listener */
        window.addEventListener('scroll', updateScrollbar);

        /* Remove event listener on cleanup */
        return () => window.removeEventListener('scroll', updateScrollbar);
    }, [updateScrollbar]);

    return scrollbar;
}