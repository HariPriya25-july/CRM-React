import { Routes, Route } from "react-router-dom"

/* Public Pages */
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

/* Dashboard Pages */
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Leads from "./pages/Leads"
import Deals from "./pages/Deals"
import Contacts from "./pages/Contacts"
import Tasks from "./pages/Tasks"
import Reports from "./pages/Reports"

function App() {
  return (
    <Routes>

      {/* -------- PUBLIC ROUTES -------- */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* -------- DASHBOARD ROUTES -------- */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="leads" element={<Leads />} />
        <Route path="deals" element={<Deals />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="reports" element={<Reports />} />
      </Route>

    </Routes>
  )
}

export default App



