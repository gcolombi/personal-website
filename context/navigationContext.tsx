import { gsap } from 'gsap';
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
import useTransitionContext from './transitionContext';

interface NavigationContextType {
    ref: HTMLElement | null;
    setRef: Dispatch<SetStateAction<HTMLElement | null>>;
    mobileNavRef: HTMLElement | null;
    setMobileNavRef: Dispatch<SetStateAction<HTMLElement | null>>;
    open: boolean;
    sticky: boolean;
    hidden: boolean;
    toggle: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
    ref: null,
    setRef: () => null,
    mobileNavRef: null,
    setMobileNavRef: () => null,
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
    const [mobileNavRef, setMobileNavRef] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const { scrollY, directionY } = useScrollbar();
    const { windowSize, isDesktop } = useWindowSize();
    const [locked, setLocked] = useLockedScroll(false);
    const router = useRouter();
    const { primaryEase } = useTransitionContext();

    const animate = (state: boolean) => {
        if (state) {
            gsap.to(mobileNavRef, {
                // scaleY: 0,
                // transformOrigin: 'top',
                // willChange: 'transform',
                opacity: 0,
                // ease: 'expo.inOut',
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
                // ease: 'expo.inOut',
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
        ref,
        setRef,
        mobileNavRef,
        setMobileNavRef,
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