const TopNavigationBar = () => {
    return (
        <div className="flex text-gray-600 justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">
                Welcome to the Admin Panel
            </h1>
            <div className="flex items-center space-x-4">
                <span>John Doe</span>
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>
    );
};

export default TopNavigationBar;
