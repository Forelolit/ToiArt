import type { FC } from 'react';

export const NotFoundPage: FC = () => {
    return (
        <>
            <div className="h-[70vh] flex flex-col justify-center items-center">
                <h1 className="text-6xl text-red-500 font-bold">404</h1>
                <h2 className="text-4xl font-semibold mb-8">Извините страница не найдена.</h2>
            </div>
        </>
    );
};
