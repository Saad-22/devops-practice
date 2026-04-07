# devops-practice Project 🚀

## 📌 Overview
This project demonstrates a complete DevOps pipeline by building, containerizing, and deploying a full-stack application using Docker and GitHub Actions.

The application consists of a frontend served via Nginx and a backend API, both running in Docker containers and deployed on an AWS EC2 instance.

---

## 🏗️ Architecture

Client (Browser)
   ↓
Nginx (Frontend Container)
   ↓
Backend API (Docker Container)

- Nginx acts as a reverse proxy
- API requests (/api) are routed internally to backend
- Backend is NOT exposed publicly

---

## ⚙️ Tech Stack

- Docker & Docker Compose
- Nginx (Reverse Proxy)
- GitHub Actions (CI/CD)
- AWS EC2 (Deployment Server)
- Node.js (Backend)
- HTML/CSS/JS (Frontend)

---

## 🔄 CI/CD Pipeline

1. Code is pushed to GitHub
2. GitHub Actions workflow is triggered
3. Workflow connects to EC2 via SSH
4. Latest code is pulled on the server
5. Docker Compose rebuilds and restarts containers

### Deployment Commands:

```bash
cd devops-practice
git pull origin master
docker compose down
docker compose up -d --build
