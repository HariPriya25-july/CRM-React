import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">CRM</h2>

      <NavLink to="/" end>
        Dashboard
      </NavLink>

      <NavLink to="/leads">Leads</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/deals">Deals</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/reports">Reports</NavLink>
    </aside>
  )
}

export default Sidebar

