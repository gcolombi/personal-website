import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useWindowLocation() {
    const [currentURL, setCurrentURL] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        setCurrentURL(window.location.href);
    }, [router.asPath]);

    return { currentURL };
}