# MERN E-Commerce Application

Welcome to the MERN E-Commerce Application! This is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). The application includes features such as user authentication, product management, shopping cart functionality, and order processing.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [License](#license)

## Features

- User registration and authentication
- Product listing with search and filter
- Shopping cart management
- Order management
- Admin dashboard for managing products and orders

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Frontend:**
  - React
  - Vite for development and build
  - React Router for navigation
  - context API

- **Development Tools:**
  - Prettier
  - Nodemon for auto-reloading

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or remote)
- Git

### Clone the Repository

```bash
git clone https://github.com/AbishekAP/react-ecommerce-site.git

```

### Install Dependencies
## Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```
## Frontend

Navigate to the frontend directory and install dependencies:

```bash

cd ../frontend
npm install
```
### Usage
## Configuration

Create a .env file in the backend directory with the following environment variables:

```env
DB_URI=your_mongodb_uri
PORT=8000
NODE_ENV="production"
```

### Running the Application
## Backend

Start the backend server:

```bash

cd backend
npm start
```

## Frontend

Start the frontend development server:

```bash

cd ../frontend
npm run dev

```

Visit http://localhost:5000 in your browser to access the application.

### License

This project is licensed under the MIT License. See the LICENSE file for details.