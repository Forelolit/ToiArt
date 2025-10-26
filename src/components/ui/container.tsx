import type { FC } from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={`container mx-auto ${className}`}>{children}</div>;
};
