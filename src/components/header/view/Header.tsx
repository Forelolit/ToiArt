import type { FC } from 'react';
import { Container } from '@/components/ui/container';
import { path } from '@/utils/constants/constants';
import { Link } from 'react-router';

export const Header: FC = () => {
    return (
        <header className="p-3 border-b-2 border-neutral-300 mb-14">
            <Container>
                <div className="flex justify-around items-center">
                    <Link to={path.home} className="text-neutral-800 text-2xl font-semibold">
                        TOIART
                    </Link>
                </div>
            </Container>
        </header>
    );
};
