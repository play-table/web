import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import My from "./components/pages/my/My";
import Root from "./components/pages/Layout/Root";
import Home from "./components/pages/home/Home";
import Store from "./components/pages/store/Store";
import Search from "./components/pages/search/Search";
import Review from "./components/pages/review/Review";
import ReviewInput from "./components/pages/review/ReviewInput";
import Edit from "./components/pages/my/Edit";
import WaitingHome from "./components/pages/waiting/WaitingHome";
import WaitingCheck from "./components/pages/waiting/WaitingCheck";
import Calendar from "./components/atoms/Calander";
import Reservation from "./components/pages/waiting/Reservation";
import ReservationConfirm from "./components/pages/waiting/ReservationConfirm";
import ReservationOner from "./components/pages/waiting/ReservationOner";
import WaitingOner from "./components/pages/waiting/WaitingOner";
import WaitingComponent from "./components/pages/waiting/WaitingComponent";
import Customer from "./components/pages/customer/Customer";
import Owner from "./components/pages/owner/Owner";
import InputMenu from "./components/pages/inputMenu/InputMenu";
import InputStore from "./components/pages/inputStore/InputStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/review/:storeId",
        element: <Review />,
      },
      {
        path: "/review/input",
        element: <ReviewInput />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/waiting",
        element: <WaitingHome />,
      },
      {
        path: "/waiting2",
        element: <WaitingCheck />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/reservation2",
        element: <ReservationConfirm />,
      },
      {
        path: "/reservation3",
        element: <ReservationOner />,
      },
      {
        path: "/reservation4",
        element: <WaitingOner />,
      },
      {
        path: "/switch",
        element: <WaitingComponent />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/owner",
        element: <Owner />,
      },
      {
        path: "/inputMenu",
        element: <InputMenu />,
      },
      {
        path: "/inputStore",
        element: <InputStore />,
      },
    ],
  },
  {
    path: "/my",
    element: <My />,
    // children : [
    //   {
    //     path : '/',
    //     element : <App />,
    //   },
    // ]
  },
]);

export default router;
