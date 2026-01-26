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

  useEffect(() => {
    fetchUsers();
    fetchTasks();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const createUser = async () => {
    await api.post("/users", { name: userName, email: userEmail });
    setUserName("");
    setUserEmail("");
    fetchUsers();
  };

  const createTask = async () => {
    await api.post("/tasks", {
      title,
      description,
      assignedTo,
    });
    setTitle("");
    setDescription("");
    setAssignedTo("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Management Utility</h1>

      <h2>Create User</h2>
      <input
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={createUser}>Add User</button>

      <h2>Create Task</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
        <option value="">Assign User</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
      <button onClick={createTask}>Add Task</button>

      <h2>Tasks Dashboard</h2>
      <table border="1" cellPadding="10">
        <thead>
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
              <td>{t.assignedTo?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
