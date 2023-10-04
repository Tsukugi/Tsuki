import Button from "./Button";
import Card from "./Card";
import DataTable from "./DataTable";
import TopNavigationBar from "./TopNavigationBar";
import UserProfileCard from "./UserProfileCard";

const Content = () => {
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

export default Content;
