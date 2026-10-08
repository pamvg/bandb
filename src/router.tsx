import { createBrowserRouter } from "react-router"
import './global.css';

import { DefaultLayout } from "@/layouts/DefaultLayout"
import HomePage from "@/pages/HomePage"
// import { ServicesPage } from "@/pages/ServicesPage"
// import { BookingPage } from "@/pages/BookingPage"

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    //   {
    //     path: "/services",
    //     element: <ServicesPage />,
    //   },
    //   {
    //     path: "/book/:serviceId",
    //     element: <BookingPage />,
    //   },
    ],
  },
])