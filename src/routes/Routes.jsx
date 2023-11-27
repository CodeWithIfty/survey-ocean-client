import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Surveys from "../pages/Dashboard/Surveys";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddSurvey from "../pages/Dashboard/AddSurvey";
import PrivateRoute from "./PrivateRoute";
import SurveyDetails from "../pages/Dashboard/SurveyDetails/SurveyDetails";
import ManageSurveys from "../pages/Dashboard/ManageSurveys/ManageSurveys";
import StartSurvey from "../pages/Dashboard/StartSurvey";
import Profile from "../pages/Profile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminSurveyManage from "../pages/Dashboard/AdminSurveyManage/AdminSurveyManage";
import UpdateSurvey from "../pages/Dashboard/ManageSurveys/UpdateSurvey";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "surveys",
        element: <Surveys />,
      },
      {
        path: "add-survey",
        element: (
          <PrivateRoute>
            <AddSurvey />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-surveys",
        element: (
          <PrivateRoute>
            <ManageSurveys />
          </PrivateRoute>
        ),
      },
      {
        path: "update-survey/:id",
        element: (
          <PrivateRoute>
            <UpdateSurvey />
          </PrivateRoute>
        ),
      },
      {
        path: "survey-details/:id",
        element: <SurveyDetails />,
      },
      {
        path: "survey/:id",
        element: <StartSurvey />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-manage-surveys",
        element: (
          <PrivateRoute>
            <AdminSurveyManage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
