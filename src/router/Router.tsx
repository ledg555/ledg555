import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayout } from "../app/layout";
import { NotFound } from "../app/not-found";
import { HomePage } from "../app/home";
import { AboutPage } from "../app/about";
import { ProjectsPage } from "../app/projects";
import { ExperiencePage } from "../app/experience";
import { SkillsPage } from "../app/skills";
// import LanguageRedirect from "../components/LangRedirect";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    errorComponent: NotFound,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "experience", Component: ExperiencePage },
      { path: "skills", Component: SkillsPage },
    ],
  },
  // {
  //   path: "*",
  //   Component: LanguageRedirect,
  // },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
