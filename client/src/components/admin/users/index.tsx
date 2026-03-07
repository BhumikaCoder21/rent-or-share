"use client";

import { UsersTable } from "@/components/admin/users/UsersTable";
import { useAdmin } from "@/hooks/useAdmin";

export function UsersPage() {
  const {profiles, loading, error, deleteUser} = useAdmin();

const handleDelete = async (id: string) => {
     await deleteUser(id);
};

  if(error) return <h1>Error</h1>
  return (loading)?  <div>Loading....</div> :
(
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <UsersTable users={profiles} onDelete={handleDelete} />
    </div>
  );
}
