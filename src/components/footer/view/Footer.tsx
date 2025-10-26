import type { FC } from 'react';
import { Container } from '@/components/ui/container';

export const Footer: FC = () => {
    return (
        <footer className="p-5 border-t-2 border-neutral-300 mt-15">
            <Container>
                <div className="text-center text-neutral-600 text-sm">
                    © {new Date().getFullYear()} TOI ART & TOI ART WIDE. Все права защищены.
                </div>
            </Container>
        </footer>
    );
};
