import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Surveys from "../pages/Dashboard/Surveys";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddSurvey from "../pages/Dashboard/AddSurvey";
import ManageSurveys from "../pages/Dashboard/ManageSurveys";
import PrivateRoute from "./PrivateRoute";
import SurveyDetails from "../pages/Dashboard/SurveyDetails/SurveyDetails";
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
        path: "survey-details/:id",
        element: <SurveyDetails />,
      },
    ],
  },
]);
