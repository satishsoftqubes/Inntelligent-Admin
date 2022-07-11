import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/Styles/App.scss";
import "./assets/Styles/Component.scss";
import Loader from "./Component/Loader/Index";
import DefaultLayout from "./Container/DefaultLayout";
import AuthLayout from "./Views/Authentication/AuthLayout";

const HomePage = React.lazy(() => import("./Views/Home"));
const ComponentsPage = React.lazy(() => import("./Views/ComponentsPage"));

function App() {
  return (
    <div>
      <Router>
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
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<AuthLayout />}></Route>
          <Route path="/clientSelection" element={<AuthLayout />} />
          <Route path="/forgotPassword" element={<AuthLayout />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <React.Suspense fallback={<Loader />}>
                  <HomePage />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/componentPage"
              element={
                <React.Suspense fallback={<Loader />}>
                  <ComponentsPage />
                </React.Suspense>
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
