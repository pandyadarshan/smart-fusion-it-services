import "./App.css";
import React from 'react';
import Layout from "./components/layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/pages/Home";
import "../src/styling";
import Services from "./components/pages/services";
import Ads from "./components/pages/services/components/Ads";
import SocialMarketing from "./components/pages/services/components/SocialMarketing";
import Designing from "./components/pages/services/components/Designing";
import WebDevelopment from "./components/pages/services/components/WebDevelopment";
import WebHosting from "./components/pages/services/components/WebHosting";
import SEO from "./components/pages/services/components/SEO";
import WindowsApplication from "./components/pages/services/components/WindowsApplication";
import Team from "./components/pages/Team";
import Skills from "./components/pages/Skills";
import Frontend from "./components/pages/Skills/Frontend";
import Backend from "./components/pages/Skills/Backend";
import Desigining from "./components/pages/Skills/Desigining";
import Others from "./components/pages/Skills/Others";
import WebHostingSkill from "./components/pages/Skills/WebHostingSkill";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/our-team",
        element: <Team />,
      },
      {
        path: "/services",
        element: <Services />,
        children: [
          { path: "ads", element: <Ads /> },
          { path: "social-media-marketing", element: <SocialMarketing /> },
          { path: "designing", element: <Designing /> },
          { path: "web-development", element: <WebDevelopment /> },
          { path: "web-hosting", element: <WebHosting /> },
          { path: "seo", element: <SEO /> },
          { path: "windows-application", element: <WindowsApplication /> },
        ],
      },
      {
        path: "/skills",
        element: <Skills />,
        children: [
          { path: "frontend", element: <Frontend /> },
          { path: "backend", element: <Backend /> },
          { path: "designing", element: <Desigining /> },
          { path: "others", element: <Others /> },
          { path: "web-hosting", element: <WebHostingSkill /> },
        ],
      },
    ],
  },
];

const basename = '/smart-fusion-it-services';
const router = createBrowserRouter(routes, { basename });
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
