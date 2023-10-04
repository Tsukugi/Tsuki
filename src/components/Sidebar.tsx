const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 p-10 flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
            {/* Sidebar links */}
            <ul className="space-y-2">
                <li className="hover:bg-gray-700 p-2 rounded">
                    <a href="#dashboard">Dashboard</a>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded">
                    <a href="#users">Users</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
