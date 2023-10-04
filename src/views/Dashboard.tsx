import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Dashboard;
