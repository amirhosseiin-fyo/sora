import { Suspense } from "react";
import { Outlet } from "react-router";

function Layout () {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;