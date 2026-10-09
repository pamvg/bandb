import { Route, Routes } from "react-router"

import { DefaultLayout } from "@/layouts/DefaultLayout"
import HomePage from "@/pages/HomePage"
// import { ServicesPage } from "@/pages/ServicesPage"
// import { BookingPage } from "@/pages/BookingPage"

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/book/:serviceId" element={<BookingPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App