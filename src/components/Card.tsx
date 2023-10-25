import React, { ReactNode, HTMLProps } from "react";

interface ICardProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
const Card: React.FC<ICardProps> = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className={`bg-white p-6 rounded shadow m-1 ${props.className}`}
        >
            {children}
        </div>
    );
};

export default Card;
