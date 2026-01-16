import Table from "../components/Table"

const Contacts = () => {
  const columns = ["Name", "Email", "Phone", "Company", "Status"]

  const data = [
    {
      Name: "John Doe",
      Email: "john@example.com",
      Phone: "9876543210",
      Company: "Innovate Corp",
      Status: "Active",
    },
    {
      Name: "Jane Smith",
      Email: "jane@example.com",
      Phone: "9123456780",
      Company: "Tech Horizons",
      Status: "Inactive",
    },
  ]

  return (
    <div>
      <h1>Contacts</h1>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default Contacts
