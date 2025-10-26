import { Footer, Header, ScrollToHashElement } from '@/components';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="sm:min-h-[80vh]">
                <ScrollToHashElement />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
