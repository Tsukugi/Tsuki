import { IReactHTML } from "../interfaces/ReactHtml";

interface ICardProps extends IReactHTML {}

const Card = (props: ICardProps) => {
    const { children, className } = props;
    return (
        <div className={`bg-white p-6 rounded shadow ${className}`}>
            {children}
        </div>
    );
};

export default Card;
