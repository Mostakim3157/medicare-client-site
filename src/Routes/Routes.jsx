import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps/AvailableCamps";
import Login from "../Pages/JoinUs/Login/Login";
import Register from "../Pages/JoinUs/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import OrganizerProfile from "../Pages/Dashboard/Organizer/OrganizerProfile";
import AddCamp from "../Pages/Dashboard/Organizer/AddCamp";
import ManageCamp from "../Pages/Dashboard/Organizer/ManageCamp";
import ManageRegCamp from "../Pages/Dashboard/Organizer/ManageRegCamp";
import Analytics from "../Pages/Dashboard/Participant/Analytics";
import ParticipantProfile from "../Pages/Dashboard/Participant/ParticipantProfile";
import RegisteredCamp from "../Pages/Dashboard/Participant/RegisteredCamp";
import PaymentHistory from "../Pages/Dashboard/Participant/PaymentHistory";
import CampDetails from "../Pages/CampDetails/CampDetails";
import PrivateRoute from "./PrivateRoute";
import EditCamp from "../Components/EditCamp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableCamps",
        element: <AvailableCamps></AvailableCamps>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/campDetails/:id",
        element:<PrivateRoute> <CampDetails></CampDetails></PrivateRoute>
      },
      {
        path: "/update/:id",
        element:<PrivateRoute><EditCamp></EditCamp></PrivateRoute>
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "organizerProfile",
        element: <OrganizerProfile></OrganizerProfile>,
      },
      {
        path: "addCamp",
        element: <AddCamp></AddCamp>,
      },
      {
        path: "manageCamp",
        element: <ManageCamp></ManageCamp>,
      },
      {
        path: "manageRegCamp",
        element: <ManageRegCamp></ManageRegCamp>,
      },


      // participant
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "participantProfile",
        element: <ParticipantProfile></ParticipantProfile>,
      },
      {
        path: "registeredCampByPar",
        element:<RegisteredCamp></RegisteredCamp>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
