import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSideBar";

function DefaultLayout() {
  return (
    <div>
      <DefaultHeader />
      <DefaultSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
