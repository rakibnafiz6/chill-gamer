import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/addReview',
        element: <PrivateRoutes>
            <AddReview></AddReview>
         </PrivateRoutes>
    },
    {
        path: '/myReviews',
        element: <PrivateRoutes>
            <MyReviews></MyReviews>
        </PrivateRoutes>
    },
    {
        path: '/watchList',
        element: <PrivateRoutes>
            <GameWatchList></GameWatchList>
        </PrivateRoutes>
    }
  ]);

export default router;