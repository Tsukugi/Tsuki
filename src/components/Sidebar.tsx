import { HTMLProps } from "react";
import { Link } from "react-router-dom";

interface ISidebarProps extends HTMLProps<HTMLDivElement> {
    title?: string;
    entryRenderer?: TEntryRenderer;
    entries: string[];
}

const Sidebar = (props: ISidebarProps) => {
    const {
        className = "bg-gray-800 text-white w-48",
        title = null,
        entryRenderer = defaultEntryRenderer,
        entries,
    } = props;

    return (
        <div className={`p-10 flex flex-col items-center ${className}`}>
            {title ? (
                <h1 className="text-2xl font-semibold mb-6">{title}</h1>
            ) : null}

            <ul className="space-y-2 flex flex-col">
                {entries.map(entryRenderer)}
            </ul>
        </div>
    );
};

export type TEntryRenderer = (value: string) => JSX.Element;
const defaultEntryRenderer: TEntryRenderer = (value) => {
    const key = value.toLowerCase();
    return (
        <Link key={key} to={`/${key}`}>
            {value}
        </Link>
    );
};
export default Sidebar;
