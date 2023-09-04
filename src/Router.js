import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import My from "./components/pages/Infomation/My";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : '/my',
    element : <My />,
    // children : [
    //   {
    //     path : '/',
    //     element : <App />,
    //   },
    // ]
  }
]);

export default router;