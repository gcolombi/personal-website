import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useTransitionContext from '@/context/transitionContext';
import useNavigationContext from '@/context/navigationContext';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next-translate-routes/router';
import { translateUrl } from 'next-translate-routes';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

export default function TransitionLayout({
    children
}: {
    children: ReactNode;
}) {
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
        
        // if (currentRoute !== translateUrl(router.asPath, router.locale ?? '')) {

        if (currentRoute !== translateUrl(router.asPath, router.locale ?? '') && currentLocale === router.locale) {
            console.log('animation');
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
                /* outro complete so reset to an empty paused timeline */
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
            console.log('browser button');
            setDisplayChildren(children);
            // animateNavigation();
            // animateFooter();
            setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
            setCurrentLocale(router.locale ?? '');
            // window.scrollTo(0, 0);
            ScrollTrigger.refresh(true);
        } else {
            console.log('first load');
            setCurrentRoute(translateUrl(router.asPath, router.locale ?? '').split('?')[0]);
            ScrollTrigger.refresh(true);
        }
    // }, [router]);
    }, [router.asPath, router.locale]);

    return (
        <div className="u-overflow--hidden">
            {displayChildren}
        </div>
    );
}