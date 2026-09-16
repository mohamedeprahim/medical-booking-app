# MediBook - Medical Booking App

A responsive medical booking web application built with React.js.

## 📌 Project Overview

MediBook allows users to browse doctors, search for doctors, view doctor details, book appointments, and manage their appointments.

The application was developed as a React project with a focus on reusable components, API integration, form validation, state management, and responsive design.

## 🚀 Features

- Responsive medical booking website
- Home page
- Doctors listing
- Doctor search
- Doctor filtering
- Doctor details page
- Appointment booking
- My Appointments page
- Reschedule appointments
- Cancel appointments
- Form validation
- Loading states
- Error states
- Empty states
- Patient profile management
- 404 Not Found page
- Persistent appointment data using Zustand

## 🛠️ Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Zustand
- React Hook Form
- Tailwind CSS
- JavaScript
- REST API

## 📂 Project Structure


medical-booking-app/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── doctorApi.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── DoctorCard.jsx
│   │
│   ├── data/
│   │   └── doctors.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Doctors.jsx
│   │   ├── DoctorDetails.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── MyAppointments.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   │
│   ├── store/
│   │   └── appointmentStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md