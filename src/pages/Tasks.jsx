// src/pages/Tasks.jsx
import Card from "../components/Card";

export default function Tasks() {
  // Temporary mock data until backend is ready
  const tasks = [
    { id: 1, title: "Follow up with Innovate Corp", due: "2026-01-15", status: "Pending" },
    { id: 2, title: "Schedule demo for Tech Horizons", due: "2026-01-16", status: "In Progress" },
    { id: 3, title: "Prepare proposal for Global Solutions", due: "2026-01-18", status: "Pending" },
  ];

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>

      {/* KPI cards */}
      <div className="kpi-grid">
        <Card title="Total Tasks" value={tasks.length} />
        <Card title="Pending" value={tasks.filter(t => t.status === "Pending").length} />
        <Card title="In Progress" value={tasks.filter(t => t.status === "In Progress").length} />
      </div>

      {/* Task list */}
      <div className="task-list">
        <h2>Upcoming Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.title}</strong> — Due: {task.due} ({task.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}