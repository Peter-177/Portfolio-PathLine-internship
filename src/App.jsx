import { lazy, Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const About = lazy(() => import("./pages/About"));
const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const Contact = lazy(() => import("./pages/Contact"));
const Skills = lazy(() => import("./pages/Skills"));
const Landing = lazy(() => import("./pages/Landing"));
const Projects = lazy(() => import("./pages/Projects"));

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
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
