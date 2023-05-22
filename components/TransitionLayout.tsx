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
    const { timeline, resetTimeline, primaryEase, footerRef } = useTransitionContext();
    const { navigationRef, setCurrentRoute } = useNavigationContext();

    const animateNavigation = () => {
        /* Intro animation */
        gsap.fromTo(
            navigationRef.current, {
                y: '-100%'
            },
            {
                opacity: 1,
                y: 0,
                willChange: 'transform',
                ease: primaryEase,
                delay: 1,
                duration: 1.25
            }
        );

        /* Outro animation */
        timeline?.add(
            gsap.to(navigationRef.current,
                {
                    opacity: 0,
                    ease: primaryEase,
                    duration: 0.45
                }
            ),
            0
        );
    };

    const animateFooter = () => {
        /* Intro animation */
        gsap.to(footerRef.current,
            {
                opacity: 1,
                ease: primaryEase,
                duration: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom',
                    end: 'bottom top'
                }
            }
        );

        /* Outro animation */
        timeline?.add(
            gsap.to(footerRef.current,
                {
                    opacity: 0,
                    ease: primaryEase,
                    duration: 0.45
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
                animateNavigation();
                animateFooter();
                setCurrentRoute(router.asPath);
                ScrollTrigger.refresh(true);
                return;
            }

            timeline?.play().then(() => {
                /* outro complete so reset to an empty paused timeline */
                resetTimeline();
                setCurrentPage({
                    route: router.asPath,
                    children
                });
                animateNavigation();
                animateFooter();
                setCurrentRoute(router.asPath);
                ScrollTrigger.refresh(true);
            });

        } else {
            ScrollTrigger.refresh(true);
            setCurrentRoute(router.asPath);
        }
    }, [router.asPath]);

    return (
        <div className="u-overflow--hidden">
            {currentPage.children}
        </div>
    );
}