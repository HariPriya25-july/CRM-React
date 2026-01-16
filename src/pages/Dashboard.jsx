const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Leads</h3>
          <p>128</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Deals</h3>
          <p>42</p>
        </div>

        <div className="dashboard-card">
          <h3>Contacts</h3>
          <p>86</p>
        </div>

        <div className="dashboard-card">
          <h3>Tasks</h3>
          <p>14</p>
        </div>
      </div>

      <div className="tasks-section">
        <h2>Upcoming Tasks</h2>
        <ul>
          <li>Follow up with Innovate Corp</li>
          <li>Schedule demo for Tech Horizons</li>
          <li>Prepare proposal for Global Solutions</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

