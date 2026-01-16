import Sidebar from "../components/Sidebar"

const Leads = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "40px" }}>
        <h1>Leads Page</h1>
        <p>Manage and track your leads here.</p>
      </div>
    </div>
  )
}

export default Leads
