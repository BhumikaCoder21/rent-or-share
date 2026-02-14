"use client";

import { useState } from "react";
import UsersTable from "@/components/admin/UsersTable";
import { users as dummyUsers } from "@/components/admin/admin-data";

export default function UsersPage() {
  const [users, setUsers] = useState(dummyUsers);

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <UsersTable users={users} onDelete={handleDelete} />
    </div>
  );
}
