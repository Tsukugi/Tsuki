import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar entries={["Dashboard", "Tsuki"]} />
            <Content />
        </div>
    );
};

export default Dashboard;
