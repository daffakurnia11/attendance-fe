# Attendance Frontend

This project is a **Next.js-based web application** for managing user attendance. It features **user authentication, attendance tracking,** and **profile management** with an intuitive and responsive UI. The application communicates with a backend API hosted at [attendance-be.test.dafkur.com](https://attendance-be.test.dafkur.com).

This README provides an overview of the project structure, installation steps, key features, and technical decisions made during development.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Tech Decisions](#tech-decisions)
- [Environment Variables](#environment-variables)
- [Security Considerations](#security-considerations)
- [Future Improvements](#future-improvements)
- [Contact Information](#contact-information)

---

## Project Structure

```
|-- .github/
|-- .next/
|-- node_modules/
|-- src/
|   |-- app/
|       |-- (auth)/
|           |-- login/
|               |-- _component/
|                   |-- Login.hook.ts
|                   |-- Login.tsx
|               |-- page.tsx
|           |-- register/
|               |-- _component/
|                   |-- Register.hook.ts
|                   |-- Register.tsx
|               |-- page.tsx
|       |-- (dashboard)/
|           |-- _component/
|               |-- Dashboard.tsx
|               |-- AttendanceDetail.tsx
|           |-- [...id]/page.tsx
|       |-- attend/
|           |-- _component/
|               |-- Attend.tsx
|           |-- page.tsx
|       |-- password/
|           |-- _component/
|               |-- ChangePass.tsx
|           |-- page.tsx
|       |-- profile/
|           |-- _component/
|               |-- Profile.tsx
|           |-- layout.tsx
|           |-- page.tsx
|   |-- components/
|       |-- Attendance/
|           |-- Camera.tsx
|           |-- useCamera.ts
|           |-- useIPAddress.ts
|           |-- useLocation.ts
|       |-- Message/
|           |-- index.tsx
|       |-- Navigation/
|           |-- index.tsx
|       |-- Provider/
|           |-- ClientProvider.tsx
|       |-- Typography/
|           |-- Heading.tsx
|           |-- Text.tsx
|   |-- services/
|       |-- apis/
|           |-- api-service.ts
|           |-- attendance.ts
|           |-- auth.ts
|           |-- user.ts
|       |-- swr/
|           |-- useAttendance.ts
|           |-- useUser.ts
|   |-- styles/
|       |-- globals.css
|   |-- types/
|       |-- attendance.d.ts
|       |-- auth.d.ts
|       |-- response.d.ts
|       |-- user.d.ts
|   |-- utils/
|       |-- atoms.ts
|       |-- fonts.ts
|       |-- path.ts
|       |-- middleware.ts
|-- .env.local
|-- Dockerfile
|-- docker-compose.yml
|-- tailwind.config.ts
|-- tsconfig.json
```

---

## Installation

To run this project locally, follow the steps below.

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/your-repo/attendance-frontend.git
    cd attendance-frontend
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env.local` File:**

    In the root directory, create a `.env.local` file with the following content:

    ```env
    NEXT_PUBLIC_API_BASE_URL=https://attendance-be.test.dafkur.com
    ```

4.  **Run the Development Server:**

    You can run the project using **`npm`** or **Docker Compose**.

    - **Using npm:**

      ```bash
      npm run dev
      ```

    - **Using Docker Compose:**

      Ensure **Docker** is installed on your machine. Then, run:

      ```bash
      docker-compose up --build
      ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Features

- **User Authentication:**  
  Login and registration system using hooks for cleaner code.

- **Attendance Tracking:**  
  Allows users to record their attendances with camera, geolocation, and IP Address tracker support.

- **Pagination and Detail View:**  
  View all attendance logs with pagination and detailed attendance views.

- **Profile Management:**  
  Update user information and change passwords.

- **Responsive Design:**  
  Styled using **Tailwind CSS** and **Ant Design** components for a modern, mobile-friendly UI.

---

## Usage

- **Login/Register:**  
  Use your credentials to log in or create an account.

- **Attendance Tracking:**  
  Go to the attendance page to mark your attendance. The app uses your camera and location to verify the check-in.

- **Report Attendance:**
  Use to see the list of attendance by date and time, including the filter for search by name, email, and datetime.

- **Profile Management:**  
  Update your profile and password in the profile section.

---

## Live Demo

Check out the live version of the application and play around:

- [https://attendance-fe-3e7r.vercel.app/](https://attendance-fe-3e7r.vercel.app/)

---

## Tech Decisions

- **Next.js:** Provides SSR and SSG capabilities, boosting SEO and performance.
- **Ant Design & Tailwind CSS:** Offers a combination of components and utility classes for rapid UI development.
- **Jotai:** Lightweight state management solution for better maintainability.
- **SWR:** Simplifies data fetching and caching while keeping UI data fresh.
- **Axios:** Used for HTTP requests with the backend API.

---

## Environment Variables

- **API Base URL:**  
  The base URL for the backend API is configured via environment variables.

  ```env
  NEXT_PUBLIC_API_BASE_URL=https://attendance-be.test.dafkur.com
  ```

---

## Security Considerations

- **Secure API Communication:**  
  All API requests use **HTTPS** to protect user data.

- **Cookie Management:**  
  Authentication tokens are securely managed using **cookies-next** on both client and server.

- **Input Validation:**  
  Ensures all user inputs are sanitized to prevent XSS attacks.

---

## Future Improvements

- **Dark Mode Support:**  
  Add theme switching for better user experience.

- **Enhanced Error Logging:**  
  Integrate logging services to monitor and debug production issues.

- **PWA Support:**  
  Make the app installable as a Progressive Web App.

---

## Contact Information

For any inquiries or support, feel free to contact:

- **Email:** daffakurniaf11@gmail.com
- **WhatsApp:** [+6285156317473](https://wa.me/6285156317473)
- **LinkedIn:** [Daffa Kurnia Fatah](https://www.linkedin.com/in/daffakurniafatah/)
- **Portfolio:** [dafkur.com](https://dafkur.com)
