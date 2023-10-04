import { IReactHTML } from "../interfaces/reactHtml";
import Card from "./Card";

interface IUserProfileCardProps extends IReactHTML {}

const UserProfileCard = (props: IUserProfileCardProps) => {
    const { className } = props;
    return (
        <Card className={className}>
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/80"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p>john.doe@example.com</p>
                </div>
            </div>
        </Card>
    );
};

export default UserProfileCard;
