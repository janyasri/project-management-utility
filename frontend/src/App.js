import { useEffect, useState } from "react";
import api from "./axios";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const btnStyle = {
    background: "#667eea",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  useEffect(() => {
    fetchUsers();
    fetchTasks();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data || []);
    } catch (err) {
      console.log("Users error:", err.message);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data || []);
    } catch (err) {
      console.log("Tasks error:", err.message);
    }
  };

  const createUser = async () => {
    try {
      await api.post("/users", { name: userName, email: userEmail });
      setUserName("");
      setUserEmail("");
      fetchUsers();
    } catch (err) {
      alert("Error creating user");
    }
  };

  const createTask = async () => {
    try {
      await api.post("/tasks", { title, description, assignedTo });
      setTitle("");
      setDescription("");
      setAssignedTo("");
      fetchTasks();
    } catch (err) {
      alert("Error creating task");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>
          Project Management Utility
        </h1>

        <h2>Create User</h2>
        <input
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button onClick={createUser} style={btnStyle}>
          Add User
        </button>

        <h2 style={{ marginTop: "30px" }}>Create Task</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        >
          <option value="">Assign User</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>
              {u.name}
            </option>
          ))}
        </select>
        <button onClick={createTask} style={btnStyle}>
          Add Task
        </button>

        <h2 style={{ marginTop: "30px" }}>Tasks Dashboard</h2>
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}
        >
          <thead style={{ background: "#667eea", color: "white" }}>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t._id}>
                <td>{t.title}</td>
                <td>{t.status}</td>
                <td>{t.assignedTo?.name || "Unassigned"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
