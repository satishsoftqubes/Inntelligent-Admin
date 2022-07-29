import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";
import "./assets/styles/Component.scss";
import Loader from "./Component/Loader/Index";
import DefaultLayout from "./Container/DefaultLayout";
import AuthLayout from "./Views/Authentication/AuthLayout";
import UserProfile from "./Views/Common/Profile/Index";

const HomePage = React.lazy(() => import("./Views/Index"));
const ComponentsPage = React.lazy(() => import("./Views/ComponentsPage"));
const Users = React.lazy(() => import("./Views/SetupAndConfiguration/UserManagement/Users"));
const UsersRole = React.lazy(
  () => import("./Views/SetupAndConfiguration/UserManagement/UsersRole")
);
const ClintList = React.lazy(() => import("./Views/ClintList/ClintList"));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}></Route>
          <Route path="/forgotPassword" element={<AuthLayout />}></Route>
          <Route path="/" element={<DefaultLayout />}>
            <Route
              path="/home"
              element={
                <React.Suspense fallback={<Loader />}>
                  <HomePage />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/userProfile"
              element={
                <React.Suspense fallback={<Loader />}>
                  <UserProfile />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/changePassword"
              element={
                <React.Suspense fallback={<Loader />}>
                  <UserProfile />
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
            <Route
              path="/SetupAndConfigurations/user"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Users />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/SetupAndConfigurations/userRole"
              element={
                <React.Suspense fallback={<Loader />}>
                  <UsersRole />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/clint-list"
              element={
                <React.Suspense fallback={<Loader />}>
                  <ClintList />
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
