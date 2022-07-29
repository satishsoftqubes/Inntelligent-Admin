import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import InPageNav from "../Views/Common/InPageNav/Index";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSideBar";

function DefaultLayout() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DefaultHeader />
      <DefaultSidebar />
      <main className="main-body">
        <InPageNav />
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
