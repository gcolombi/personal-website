import { gsap } from 'gsap';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function TransitionLayout({
    children
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState({
        route: router.asPath,
        children
    });
    const { timeline, resetTimeline } = useTransitionContext();
    const { ref } = useNavigationContext();

    const animateNavigation = () => {
        /* Intro animation */
        gsap.to(ref, {
            opacity: 1,
            y: 0,
            willChange: 'transform',
            ease: 'ease.in',
            delay: 1,
            duration: 0.45,
            onComplete: () => {
                console.log('transition layout to');
            }
        });

        /* Outro animation */
        timeline?.add(
            gsap.to(ref,
                {
                    y: '-100%',
                    willChange: 'transform',
                    ease: 'ease.in',
                    duration: 0.45,
                    onComplete: () => {
                        console.log('transition layout complete');
                    }
                }
            ),
            0
        );
    };

    useIsomorphicLayoutEffect(() => {
        if (currentPage.route !== router.asPath) {
            if (timeline?.duration() === 0) {
                /* There are no outro animations, so immediately transition */
                setCurrentPage({
                    route: router.asPath,
                    children
                });
                ScrollTrigger.refresh(true);
                animateNavigation();
                return;
            }

            timeline?.play().then(() => {
                /* outro complete so reset to an empty paused timeline */
                resetTimeline();
                setCurrentPage({
                    route: router.asPath,
                    children
                });
                ScrollTrigger.refresh(true);
                animateNavigation();
            });

        } else {
            ScrollTrigger.refresh(true);
        }
    }, [router.asPath]);

    return (
        <div className="u-overflow--hidden">
            {currentPage.children}
        </div>
    );
}