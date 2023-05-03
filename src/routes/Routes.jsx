import { createBrowserRouter } from "react-router-dom";
import MAIN from "../Components/Main/MAIN";
import Template from "../Components/template/Template";
import Categories from "../Components/Categories/Categories";
import Home1 from "../Components/Home1/Home1";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Blog from "../Components/Blog/Blog";
import PrivateRoute from "../Components/Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MAIN />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/item/:id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`/http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
