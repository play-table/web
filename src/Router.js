import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import My from './components/pages/Infomation/My';
import Root from './components/pages/Layout/Root';
import Home from './components/pages/home/Home';
import Search from "./components/pages/search/Search";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path:'/search',
        element:<Search/>
      }
    ],
  },
  {
    path: '/my',
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
