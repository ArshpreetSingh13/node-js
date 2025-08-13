import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./User/Layout/Footer"
import PageHeader from "./User/Layout/PageHeader"
import UserHeader from "./User/Layout/UserHeader"
import UserMaster from "./User/Layout/UserMaster"
import Home from "./User/Components/Home"
import Features from "./Components/Features"
import OurClasses from "./Components/OurClasses"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"
import Login from "./Auth/Login"
import AdminMaster from "./Admin/Layout/AdminMaster"
import DashBoard from "./Admin/Layout/DashBoard"
import AddTrainer from "./Admin/Components/AddTrainer"
import ManageTrainers from "./Admin/Components/ManagePage"
import Register from "./Auth/Register"
import ViewTrainer from "./User/Components/ViewTrainer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserMaster />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="ourclasses" element={<OurClasses />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contactUs" element={<Contact />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="viewtrainers" element={<ViewTrainer />} />
          </Route>


          <Route path="/admin" element={<AdminMaster />}>
            <Route index element={<DashBoard />} />
            <Route path="addTrainer" element={<AddTrainer />} />
            <Route path="manageTrainer" element={<ManageTrainers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
