import { IReactHTML } from "../interfaces/reactHtml";

interface IButtonProps extends IReactHTML {}

const Button = (props: IButtonProps) => {
    const { children } = props;
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};

export default Button;
