import Card from "./Card";

interface IUserInfoCardProps {
    user: {
        avatarUrl: string;
        name: string;
        email: string;
    };
}

const UserInfoCard = (props: IUserInfoCardProps) => {
    const { user } = props;
    return (
        <Card>
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <div className="flex items-center space-x-4">
                <img
                    src={user.avatarUrl || "https://via.placeholder.com/80"}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
        </Card>
    );
};

export default UserInfoCard;
