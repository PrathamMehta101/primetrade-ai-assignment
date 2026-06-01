# 🚀 PrimeTrade Backend Assignment

## 🎥 WORKING DEMO

👉 https://youtu.be/Tr7vcd_WY_M

---

## 📌 Overview

This project demonstrates the design and implementation of a **secure, scalable backend system** along with a minimal frontend interface to interact with APIs.

It includes:

- JWT-based authentication
- Role-based access control (RBAC)
- RESTful CRUD APIs
- Input validation & error handling
- API documentation using Swagger
- Functional frontend UI

---

## 🛠️ Tech Stack

### Backend

- Node.js + Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)
- express-validator (input validation)

### Frontend

- Vanilla JavaScript (HTML, CSS)
- Fetch API

### Tools

- Swagger (API documentation)
- Postman / cURL (testing)

---

## 🔐 Features

### Authentication & Security

- User registration & login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware

### Role-Based Access Control

- Supports `user` and `admin` roles
- Middleware-based authorization

### Task Management (CRUD)

- Create, read, update, delete tasks
- Tasks are user-specific
- Secure access (users only see their own data)

### Validation & Error Handling

- Input validation using express-validator
- Centralized error handling middleware

### API Documentation

- Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## 📂 Project Structure

```
primetrade-ai-assignment/
│
├── src/
│   ├── config/        # DB & Swagger config
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & validation
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── utils/         # Helpers
│   └── app.js         # Express app
│
├── frontend/          # Basic UI
├── server.js          # Entry point
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd primetrade-ai-assignment
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/primetrade-ai-assignment
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the server

```bash
npx nodemon server.js
```

---

### 5️⃣ Run frontend

Open:

```
frontend/index.html
```

---

## 🔗 API Endpoints

### Auth Routes

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

### Task Routes (Protected)

- `GET /api/v1/tasks`
- `POST /api/v1/tasks`
- `PUT /api/v1/tasks/:id`
- `DELETE /api/v1/tasks/:id`

---

## 🧪 Example Request

### Create Task

```bash
curl -X POST http://localhost:5000/api/v1/tasks \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json" \
-d '{"title":"New Task"}'
```

---

## 🧠 Scalability Considerations

- Modular architecture for easy feature expansion
- Stateless JWT authentication for scalability
- Middleware-driven design for reusability
- Ready for integration with:
  - Redis caching
  - Load balancing
  - Microservices architecture

---

## 🎯 Key Highlights

- Clean and scalable project structure
- Secure authentication implementation
- Separation of concerns (routes, controllers, middleware)
- Real-world backend practices

---

## 🚀 Future Improvements

- Redis caching for performance optimization
- Deployment (Docker, AWS, or Render)
- Enhanced frontend (React-based dashboard)
- Logging & monitoring (Winston, Morgan)

---

## 👨‍💻 Author

Built as part of a backend developer assignment.

---

## 📄 License

This project is for educational and evaluation purposes.
