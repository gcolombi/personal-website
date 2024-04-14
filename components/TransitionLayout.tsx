import { TransitionLayout } from '@/types/components/global';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import { useState } from 'react';
import { useRouter } from 'next-translate-routes/router';
import { translateUrl } from 'next-translate-routes';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

export default function TransitionLayout({
    children
}: TransitionLayout) {
    const router = useRouter();
    const [displayChildren, setDisplayChildren] = useState(children);
    const { timeline, resetTimeline, primaryEase, footerRef } = useTransitionContext();
    const { navigationRef, setCurrentRoute, currentRoute, currentLocale, setCurrentLocale } = useNavigationContext();

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
                    duration: 0.35
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
                    duration: 0.35
                }
            ),
            0
        );
    };

    useIsomorphicLayoutEffect(() => {
        if (currentRoute !== translateUrl(router.asPath, router.locale ?? '').split('?')[0] && currentLocale === router.locale) {
            if (timeline?.duration() === 0) {
                /* There are no outro animations, so immediately transition */
                setDisplayChildren(children);
                animateNavigation();
                animateFooter();
                setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
                window.scrollTo(0, 0);
                ScrollTrigger.refresh(true);
                return;
            }

            timeline?.play().then(() => {
                /* Outro complete so reset to an empty paused timeline */
                resetTimeline();
                setDisplayChildren(children);
                animateNavigation();
                animateFooter();
                setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
                window.scrollTo(0, 0);
                ScrollTrigger.refresh(true);
                document.documentElement.classList.remove('is-transitioning');
            });

        } else if (currentLocale !== router.locale) {
            setDisplayChildren(children);
            setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
            setCurrentLocale(router.locale ?? '');
            ScrollTrigger.refresh(true);
        } else {
            setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
            ScrollTrigger.refresh(true);
        }
    }, [router.asPath, router.locale]);

    return (
        <div className="u-overflow--hidden">
            {displayChildren}
        </div>
    );
}