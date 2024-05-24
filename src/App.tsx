import { Admin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { Voting } from "./pages/Voting";
import { Result } from "./pages/Result";

// import { ReactDOM } from "react-dom";

import {
  createBrowserRouter as Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import "./App.css";

const router = Router([
  {
    path: "/",
    element: (
      <Home>
        {" "}
        <Outlet />{" "}
      </Home>
    ),
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "voting",
        element: <Voting />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
