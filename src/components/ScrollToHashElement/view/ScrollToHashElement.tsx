import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router';

export const ScrollToHashElement: FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const element = document.querySelector(hash) as HTMLElement | null;

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });

            element.classList.add('highlighted');
            const timer = setTimeout(() => {
                element.classList.remove('highlighted');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [hash]);

    return null;
};
