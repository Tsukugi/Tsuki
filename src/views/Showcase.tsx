import { useState } from "react";
import Sidebar, { TEntryRenderer } from "../components/Sidebar";
import TopNavigationBar from "../components/TopNavigationBar";
import HTMLViewer from "../components/HTMLViewer";
import cat from "../static/cat/cat.html?raw"; // We use ?raw to ensure that it will be loaded as a string
import cafe from "../static/cafe/cafe.html?raw"; // We use ?raw to ensure that it will be loaded as a string
const LocalStorageID = "Showcase.SelectedTab";
const Showcase = () => {
    const [loadedStaticPages] = useState<Record<string, string>>({ cat, cafe });
    const [selectedTab, setSelectedTab] = useState(
        localStorage.getItem("Showcase.SelectedTab") ||
            Object.keys(loadedStaticPages)[0],
    );

    const onChangeTabHandler = (key: string) => {
        setSelectedTab(key);
        localStorage.setItem(LocalStorageID, key);
    };

    const entryRendererHandler: TEntryRenderer = (value) => {
        const key = value.toLowerCase();
        return (
            <a key={key} onClick={() => onChangeTabHandler(key)}>
                {value}
            </a>
        );
    };

    return (
        <div className="flex-1 p-10 text-gray-600">
            <TopNavigationBar />
            <div className="flex w-full">
                <Sidebar
                    className="bg-white p-6 rounded shadow h-fit"
                    entries={["Cat", "Cafe"]}
                    entryRenderer={entryRendererHandler}
                />
                <div className="flex-1 bg-white p-6 ml-2 rounded shadow">
                    <HTMLViewer rawHTML={loadedStaticPages[selectedTab]} />
                </div>
            </div>
        </div>
    );
};

export default Showcase;
