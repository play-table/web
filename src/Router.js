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
import Reservation from "./components/pages/waiting/Reservation";
import ReservationOwner from "./components/pages/waiting/ReservationOwner";
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
        path: "/store/:id",
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
        path: "/review/input/:storeId",
        element: <ReviewInput />,
      },
      {
        path: "/edit/:userId",
        element: <Edit />,
      },
      {
        path: "/waiting/:storeId",
        element: <WaitingHome />,
      },
      {
        path: "/reservation/:storeId",
        element: <Reservation />,
      },
      {
        path: "/reservation/owner/:storeId",
        element: <ReservationOwner />,
      },
      {
        path: "/waiting/owner/:storeId",
        element: <WaitingOner />,
      },
      {
        path: "/waiting/check/:storeId",
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
