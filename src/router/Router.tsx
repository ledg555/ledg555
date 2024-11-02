import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../app/layout";
import Home from "../app/home";
import NotFound from "../app/not-found";
import ProjectsPage from "../app/projects/projects";
import ExperiencePage from "../app/experience/experience";
import AboutPage from "../app/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-projects", element: <ProjectsPage /> },
      { path: "all-experience", element: <ExperiencePage /> },
      { path: "about-me", element: <AboutPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
