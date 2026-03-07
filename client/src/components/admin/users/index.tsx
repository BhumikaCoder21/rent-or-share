"use client";

import { UsersTable } from "@/components/admin/users/UsersTable";
import { useAdmin } from "@/hooks/useAdmin";

export function UsersPage() {
  const {profiles, loading, error} = useAdmin();
  const data = profiles;

const handleDelete = (id: string) => {
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
