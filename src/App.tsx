import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./container/Navbar";
import HackthonDetails from "./HackthonDetails/HackthonDetails";
import HomePage from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/create-hackthon", element: <div>create page</div> },
    { path: "/hackthon-details/:id", element: <HackthonDetails /> },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
