import { User } from "@/types/users.types";

type Props = {
  users: User[];
  onDelete: (id: string) => void;
};

export function UsersTable({ users, onDelete }: Props) {
  const getRoleStyle = (role: string) => {
    if (role === "ADMIN") return "bg-purple-100 text-purple-700";
    if (role === "OWNER") return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-3">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className="py-3 font-medium">{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getRoleStyle(
                    user.role,
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="text-right">
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this user?")) {
                      onDelete(user._id);
                    }
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <p className="text-gray-500 mt-4">No users found.</p>
      )}
    </div>
  );
}
