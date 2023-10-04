import { IReactHTML } from "../interfaces/reactHtml";
import Card from "./Card";

interface IDataTableProps extends IReactHTML {}

const DataTable = (props: IDataTableProps) => {
    const { className } = props;
    return (
        <Card className={className}>
            <h2 className="text-xl font-semibold mb-4">User Data</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User 1</td>
                        <td>user1@example.com</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    );
};

export default DataTable;
