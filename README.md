The Project Management Utility is a full-stack web application built using the MERN Stack (MongoDB, Express, React, Node.js).
It allows users to create accounts, manage tasks, assign responsibilities, and track project progress through a simple dashboard.

This application is useful for:

Students managing academic projects

Small teams tracking work

Personal task organization

🛠 Tech Stack

Frontend:

React.js

Axios

CSS

Backend:

Node.js

Express.js

Database:

MongoDB Atlas

Deployment:

Frontend: Vercel

Backend: Render

✨ Features

✔ Create and manage users
✔ Create, update, and delete tasks
✔ Assign tasks to users
✔ Dashboard view of all tasks
✔ REST API integration
✔ Fully deployed full-stack application

📂 Project Structure
Backend
backend/
│── config/
│   └── db.js
│── controllers/
│   ├── userController.js
│   └── taskController.js
│── models/
│   ├── userModel.js
│   └── taskModel.js
│── routes/
│   ├── userRoutes.js
│   └── taskRoutes.js
│── server.js
│── package.json

Frontend
frontend/
│── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   ├── TaskForm.js
│   │   └── Dashboard.js
│   ├── api.js
│   ├── App.js
│   └── index.js
│── public/
│   └── index.html
│── package.json

🔗 Live Project Links

Frontend: https://project-management-utility-drvs.vercel.app/
Backend API: https://dashboard.render.com/web/srv-d5rqusc9c44c73brms60

⚙️ How to Run Locally
1️⃣ Clone Repository
git clone <https://github.com/janyasri/project-management-utility>
cd project-management-utility

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=mongodb+srv://janya:janya123@cluster0.akynrwa.mongodb.net/?appName=Cluster0
PORT=10000


Run backend:

node server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm start

📡 API Endpoints
User Routes
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/users	Create user
Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🎯 Learning Outcomes

Through this project, I learned:

Building REST APIs

MongoDB database integration

React frontend development

Connecting frontend with backend

Deploying full-stack apps

📧 Contact

Name:  Vankudoth Janya Sri

Email: janyasri2005@gmail.com

LinkedIn: www.linkedin.com/in/janya-sri-vankudoth-1877252b
