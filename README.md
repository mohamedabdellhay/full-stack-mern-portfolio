# Full Stack Portfolio

A full-stack portfolio web application built with React (frontend) and Node.js/Express/MongoDB (backend). This project allows users to showcase their projects and skills, and includes authentication, contact form, and an admin dashboard.

## Features

- User authentication (register, login, logout)
- Admin dashboard (protected route)
- Projects and skills management
- Contact form with email notifications
- Responsive UI with Tailwind CSS
- Dockerized for easy development and deployment

## Project Structure

```
.
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, for containerized setup)
- [MongoDB](https://www.mongodb.com/) (local or via Docker)

### Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

### Running with Docker

1. Build and start all services:

   ```sh
   docker-compose up --build
   ```

2. The frontend will be available at [http://localhost:3000](http://localhost:3000)  
   The backend API will be available at [http://localhost:5000](http://localhost:5000)

### Running Locally (without Docker)

#### Backend

```sh
cd backend
npm install
npm run dev
```

#### Frontend

```sh
cd frontend
npm install
npm start
```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/projects` — List all projects
- `GET /api/skills` — List all skills
- `POST /api/contact` — Send a contact message

## Technologies Used

- Frontend: React, Tailwind CSS, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer
- DevOps: Docker, Docker Compose

## License

This project is licensed under the MIT License.
