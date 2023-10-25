import Button from "../components/Button";
import Card from "../components/Card";
import DataTable from "../components/DataTable";
import TopNavigationBar from "../components/TopNavigationBar";
import UserProfileCard from "../components/UserProfileCard";

const Dashboard = () => {
    return (
        <div className="flex-1 p-10 text-gray-600">
            <TopNavigationBar />
            <DataTable />
            <UserProfileCard />

            <div className="flex">
                <DataTable className="flex-1" />
                <UserProfileCard className="flex-1" />
            </div>

            <div className="flex">
                <Card className="flex-1">
                    <Button>{"Click me!"}</Button>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
