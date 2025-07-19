import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar, Navbar here */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
