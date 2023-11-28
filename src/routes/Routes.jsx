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
import BecomeProPage from "../pages/Dashboard/BecomePro/BecomeProPage";
import CheckOut from "../pages/Dashboard/BecomePro/CheckOut";
import PaymentDetails from "../pages/Dashboard/PaymentDetails/PaymentDetails";
import ContactUs from "../pages/ContactUs";
import HowItsWorks from "../pages/HowItsWorks";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";
import DashboardRoute from "./DashboardRoute";

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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <HowItsWorks />,
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
            <DashboardRoute>
              <Dashboard />
            </DashboardRoute>
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
            <SurveyorRoute>
              <AddSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-surveys",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <ManageSurveys />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-survey/:id",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <UpdateSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "survey-details/:id",
        element: <SurveyDetails />,
      },
      {
        path: "survey/:id",
        element: (
          <PrivateRoute>
            <StartSurvey />
          </PrivateRoute>
        ),
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
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-manage-surveys",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminSurveyManage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "become-pro",
        element: <BecomeProPage />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-details",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <PaymentDetails />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
