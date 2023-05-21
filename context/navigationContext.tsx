import { gsap } from 'gsap';
import {
    Dispatch,
    MutableRefObject,
    ReactNode,
    RefObject,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import { useRouter } from 'next/router';
import useScrollbar from '@/hooks/useScrollbar';
import useWindowSize from '@/hooks/useWindowSize';
import useLockedScroll from '@/hooks/useLockedScroll';
import useTransitionContext from './transitionContext';

interface NavigationContextType {
    navigationRef: MutableRefObject<HTMLElement | null>;
    mobileNavRef: HTMLElement | null;
    setMobileNavRef: Dispatch<SetStateAction<HTMLElement | null>>;
    open: boolean;
    sticky: boolean;
    hidden: boolean;
    toggle: () => void;
    currentRoute: string;
    setCurrentRoute: Dispatch<SetStateAction<string>>;
}

const NavigationContext = createContext<NavigationContextType>({
    navigationRef: {
        current: null
    },
    mobileNavRef: null,
    setMobileNavRef: () => null,
    open: false,
    sticky: false,
    hidden: false,
    toggle: () => {},
    currentRoute: '',
    setCurrentRoute: () => ''
});

export function NavigationContextProvider({
    children
}: {
    children: ReactNode
}) {
    const router = useRouter();
    const navigationRef = useRef<HTMLElement | null>(null);
    const [mobileNavRef, setMobileNavRef] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(router.asPath);
    const { scrollY, directionY } = useScrollbar();
    const { windowSize, isDesktop } = useWindowSize();
    const [locked, setLocked] = useLockedScroll(false);
    const { primaryEase } = useTransitionContext();

    const animate = (state: boolean) => {
        if (state) {
            gsap.to(mobileNavRef, {
                // scaleY: 0,
                // transformOrigin: 'top',
                // willChange: 'transform',
                opacity: 0,
                ease: primaryEase,
                // delay: 0.35,
                duration: 0.7,
                onComplete: () => {
                }
            });
        } else {
            gsap.fromTo(mobileNavRef,
            {
                opacity: 1,
                scaleY: 0
            },
            {
                scaleY: 1,
                transformOrigin: 'bottom',
                willChange: 'transform',
                ease: primaryEase,
                duration: 0.7,
                onComplete: () => {
                }
            });
        }
    }

    const toggle = () => {
        setOpen(!open);
        setLocked(!locked);
        animate(open);
    };

    /* Closes navigation if viewport is larger than 991px */
    useEffect(() => {
        if (isDesktop) {
            setOpen(false);
            setLocked(false);
            animate(true);
        }
    }, [isDesktop]);

    /* Closes navigation on route change */
    useEffect(() => {
        if (open) {
            setOpen(false);
            setLocked(false);
            animate(true);
        }
    }, [router.asPath]);

    const contextValue: NavigationContextType = {
        navigationRef,
        mobileNavRef,
        setMobileNavRef,
        open,
        sticky: scrollY > 0,
        hidden: directionY > 0 && typeof windowSize.height === 'number' && scrollY > windowSize.height,
        toggle,
        currentRoute,
        setCurrentRoute
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