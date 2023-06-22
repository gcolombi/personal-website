import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useWindowLocation() {
    const [currentURL, setCurrentURL] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const urlObj = new URL(window.location.href);
        urlObj.search = '';
        urlObj.hash = '';
        setCurrentURL(urlObj.toString());
    }, [router.asPath]);

    return { currentURL };
}