import { lazy, Suspense, useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const About = lazy(() => import("./pages/About"));
const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const Contact = lazy(() => import("./pages/Contact"));
const Skills = lazy(() => import("./pages/Skills"));
const Landing = lazy(() => import("./pages/Landing"));
const Projects = lazy(() => import("./pages/Projects"));

import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    console.log("Portfolio App Mounted Successfully");
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#09090B]">
            <div className="w-16 h-16 border-4 border-cta/20 border-t-cta rounded-full animate-spin mb-4"></div>
            <p className="text-text font-black tracking-widest uppercase text-xs">Loading Experience</p>
          </div>
        }>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
