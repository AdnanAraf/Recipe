import { createBrowserRouter } from "react-router-dom";
import MAIN from "../Components/Main/MAIN";
import Template from "../Components/template/Template";
import Categories from "../Components/Categories/Categories";
import Home1 from "../Components/Home1/Home1";
import ChefDetails from "../Components/ChefDetails/ChefDetails";

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
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`/http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);

export default router;
