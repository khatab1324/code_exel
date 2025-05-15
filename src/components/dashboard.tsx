import { users } from "@/mockData";
import React from "react";
import { Button } from "./ui/button";

// User interface
export interface User {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
}

export const Dashboard = () => {
  return (
    <section className="p-6 md:p-10 font-sans bg-gray-50 dark:bg-gray-900 min-h-screen ">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
        User Dashboard
      </h2>

      <div className="overflow-x-auto shadow">
        <table className="min-w-full  bg-gray-100">
          <thead className="text-left bg-gray-400">
            {/* TODO:  add these in array */}
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>status</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {users.map((user) => (
              <tr className="hover:bg-gray-400" key={user.id}>
                <td className="px-4 py-3 ">{user.id}</td>
                <td className="px-4 py-3 ">{user.username}</td>
                <td className="px-4 py-3 ">{user.email}</td>
                <td className="px-4 py-3 ">{user.phoneNumber}</td>
                <td className="px-4 py-3 ">{user.role}</td>
                <td className="px-4 py-3 ">
                  {user.isActive ? "✅ Active" : "❌ Inactive"}
                </td>
                <td className="px-4 py-3 ">
                  {user.createdAt.toLocaleDateString()}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <Button className="bg-gradient-to-b from-blue-200 to-slate-400 text-white hover:bg-blue-700 transition-colors text-xs px-3 py-1 rounded">
                    View
                  </Button>
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-600 transition-colors text-xs px-3 py-1 rounded">
                    Edit
                  </Button>
                  <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors text-xs px-3 py-1 rounded">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
