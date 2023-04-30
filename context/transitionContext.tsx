import gsap from 'gsap';
import {
    useState,
    createContext,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction
} from 'react';

interface TransitionContextType {
    timeline: GSAPTimeline | null;
    setTimeline: Dispatch<SetStateAction<GSAPTimeline>>;
    resetTimeline: () => void;
}

const TransitionContext = createContext<TransitionContextType>({
    timeline: null,
    setTimeline: () => {},
    resetTimeline: () => {}
});

export function TransitionContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [timeline, setTimeline] = useState(
        gsap.timeline({ paused: true })
    );

    const resetTimeline = () => {
        timeline.pause().clear();
    };

    const contextValue: TransitionContextType = {
        timeline,
        setTimeline,
        resetTimeline
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