import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../app/layout";
import NotFound from "../app/not-found";
import { HomePage } from "../app/home";
import { ProjectsPage } from "../app/projects/page";
import { ExperiencePage } from "../app/experience/page";
import { AboutPage } from "../app/about/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "all-projects", element: <ProjectsPage /> },
      { path: "all-experience", element: <ExperiencePage /> },
      { path: "about-me", element: <AboutPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
