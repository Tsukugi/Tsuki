import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 p-10 flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-6">Title</h1>

            <ul className="space-y-2 flex flex-col">
                <Link className="hover:bg-gray-700 p-2 rounded" to="/dashboard">
                    Dashboard
                </Link>
                <Link className="hover:bg-gray-700 p-2 rounded" to="/users">
                    Users
                </Link>
                <Link className="hover:bg-gray-700 p-2 rounded" to="/tsuki">
                    Tsuki
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
