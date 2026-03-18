
# Mission 10 - Bowling League Database App

This project is a full-stack web application designed to display bowler information from a SQLite database. It features a **.NET 8 Web API** backend and a **React (TypeScript)** frontend.

## 🚀 Getting Started

To run this project locally, follow the steps below to start both the backend and the frontend.

### Prerequisites
* [.NET 8 SDK](https://dotnet.microsoft.com/download)
* [Node.js & npm](https://nodejs.org/)

---

### 1. Start the Backend (.NET API)
The backend provides a RESTful API to serve bowler and team data.

1. Open a terminal and navigate to the backend project folder:
   ```bash
   cd backend/FullStackFunBetter/FullStackFunBetter
   ```
2. Run the project using the specified launch profile:
   ```bash
   dotnet watch run --launch-profile "backend"
   ```
*The API will be available at **https://localhost:5000**. You can view the API documentation at **https://localhost:5000/swagger**.*

---

### 2. Start the Frontend (React)
The frontend is a React application that fetches and displays the filtered bowler list.

1. Open a **second** terminal window and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
*The website will be available at **http://localhost:3000**.*

---

## 🛠️ Project Details
* **Filtering:** The application is configured to only display bowlers belonging to the **Marlins** or **Sharks** teams.
* **Database:** Uses a SQLite database (`BowlingLeague.sqlite`).
* **Tech Stack:** ASP.NET Core, Entity Framework Core, React, TypeScript, Vite.

## 👤 Author
**John Higby** Information Systems, BYU
```
