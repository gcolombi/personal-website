import { useState, useCallback } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Size {
    width: number;
    height: number;
}

export default function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
    (node: T | null) => void,
    Size
] {
    /**
     * Mutable values like 'ref.current' aren't valid dependencies
     * because mutating them doesn't re-render the component.
     * Instead, we use a state as a ref to be reactive.
     */
    const [ref, setRef] = useState<T | null>(null);
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    /* Prevent too many rendering using useCallback */
    const handleSize = useCallback(() => {
        setSize({
            width: ref?.getBoundingClientRect().width || 0,
            height: ref?.getBoundingClientRect().height || 0
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref?.getBoundingClientRect().height, ref?.getBoundingClientRect().width]);

    useIsomorphicLayoutEffect(() => {
        /* Add event listener */
        window.addEventListener('resize', handleSize);

        /* Call handler right away so state gets updated with initial element size */
        handleSize();

        /* Remove event listener on cleanup */
        return () => window.removeEventListener('resize', handleSize);
    }, [handleSize]);

    return [setRef, size];
}