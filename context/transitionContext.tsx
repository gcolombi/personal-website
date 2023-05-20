import gsap from 'gsap';
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

interface TransitionContextType {
    timeline: GSAPTimeline | null;
    setTimeline: Dispatch<SetStateAction<GSAPTimeline>>;
    resetTimeline: () => void;
    footerRef: RefObject<HTMLElement> | undefined
}

const TransitionContext = createContext<TransitionContextType>({
    timeline: null,
    setTimeline: () => {},
    resetTimeline: () => {},
    footerRef: {current: null}
});

export function TransitionContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [timeline, setTimeline] = useState(
        gsap.timeline({ paused: true })
    );
    const footerRef = useRef(null);

    const resetTimeline = () => {
        timeline.pause().clear();
    };

    const contextValue: TransitionContextType = {
        timeline,
        setTimeline,
        resetTimeline,
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