import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HackthonDetails from "./HackthonDetails/HackthonDetails";
import HomePage from "./pages/Home/Home";
import Main from "./pages";
import CreateHackthon from "./CreateHackthon/CreateHackthon";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/create-hackthon", element: <CreateHackthon /> },
        { path: "/edit-hackthon/:id", element: <CreateHackthon /> },
        { path: "/hackthon-details/:id", element: <HackthonDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
