import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';
import { useRouter } from 'next/router';
import useScrollbar from '@/hooks/useScrollbar';
import useWindowSize from '@/hooks/useWindowSize';
import useLockedScroll from '@/hooks/useLockedScroll';

interface NavigationContextType {
    ref: HTMLElement | null;
    setRef: Dispatch<SetStateAction<HTMLElement | null>>;
    open: boolean;
    sticky: boolean;
    hidden: boolean;
    toggle: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
    ref: null,
    setRef: () => null,
    open: false,
    sticky: false,
    hidden: false,
    toggle: () => {}
});

export function NavigationContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const { scrollY, directionY } = useScrollbar();
    const { windowSize, isDesktop } = useWindowSize();
    const [locked, setLocked] = useLockedScroll(false);
    const router = useRouter();

    const toggle = () => {
        setOpen(!open);
        setLocked(!locked);
    };

    /* Closes navigation if viewport is larger than 1200px */
    useEffect(() => {
        if (isDesktop) {
            setOpen(false);
            setLocked(false);
        }
    }, [isDesktop]);

    /* Closes navigation on route change */
    useEffect(() => {
        if (open) {
            setOpen(false);
            setLocked(false);
        }
    }, [router.asPath]);

    const contextValue: NavigationContextType = {
        ref,
        setRef,
        open,
        sticky: scrollY > 0,
        hidden: directionY > 0 && typeof windowSize.height === 'number' && scrollY > windowSize.height,
        toggle
    };

    return (
        <NavigationContext.Provider
            value={contextValue}
        >
            {children}
        </NavigationContext.Provider>
    );
};

export default function useNavigationContext(): NavigationContextType {
    return useContext(NavigationContext);
}