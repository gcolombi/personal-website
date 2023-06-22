import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import {
    useState,
    createContext,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useRef,
    RefObject
} from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(CustomEase);
}

interface TransitionContextType {
    timeline: GSAPTimeline | null;
    setTimeline: Dispatch<SetStateAction<GSAPTimeline>>;
    resetTimeline: () => void;
    primaryEase: any;
    footerRef: RefObject<HTMLDivElement>;
}

const TransitionContext = createContext<TransitionContextType>({
    timeline: null,
    setTimeline: () => {},
    resetTimeline: () => {},
    primaryEase: null,
    footerRef: {
        current: null
    }
});

export function TransitionContextProvider({
    children
}: {
    children: ReactNode
}) {
    const setTransition = () => {
        document.documentElement.classList.add('is-transitioning');
    };
    const [timeline, setTimeline] = useState(
        gsap.timeline({ onStart: setTransition, paused: true })
    );
    const primaryEase = typeof window !== 'undefined' ? CustomEase.create('primaryEase', 'M0,0 C0.62,0.05 0.01,0.99 1,1') : null;
    const footerRef = useRef<HTMLDivElement | null>(null);

    const resetTimeline = () => {
        timeline.pause().clear();
    };

    const contextValue: TransitionContextType = {
        timeline,
        setTimeline,
        resetTimeline,
        primaryEase,
        footerRef
    };

    return (
        <TransitionContext.Provider
            value={contextValue}
        >
            {children}
        </TransitionContext.Provider>
    );
}

export default function useTransitionContext(): TransitionContextType {
    return useContext(TransitionContext);
}