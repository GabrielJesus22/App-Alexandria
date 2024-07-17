import { ReactNode } from 'react';

type Props = {
    className?: string; 
    title: ReactNode | string;
};

export const Buttons = ({
    className,
    title
}: Props) => { 
    return (
        <button className="flex justify-center items-center w-full h-full color text-sm bg-[#5c5c5c] border-b-4 border-[#3a3a3a] rounded-lg active:border-b-0">
            {title}
        </button>
    )
}