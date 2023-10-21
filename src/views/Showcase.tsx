import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavigationBar from "../components/TopNavigationBar";
import HTMLViewer from "../components/HTMLViewer";
import cat from "../static/cat/cat.html?raw"; // We use ?raw to ensure that it will be loaded as a string

const Showcase = () => {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        setHtmlContent(cat);
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div className="flex w-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-10 text-gray-600">
                <div className="flex-1 p-10 text-gray-600">
                    <TopNavigationBar />{" "}
                    <HTMLViewer rawHTML={htmlContent}></HTMLViewer>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
