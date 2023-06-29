# Fashion Catalog

This repository contains a fashion catalog application built with a frontend developed using Vite and React, and a backend powered by Strapi headless CMS. The application allows users to browse and manage fashion products in a convenient and user-friendly manner.

## Features

- **Frontend (frontend/)**: The frontend folder contains the Vite + React codebase for the fashion catalog application. It provides a modern and responsive user interface that allows users to view and interact with the fashion products.

- **Backend (backend/)**: The backend folder contains the Strapi headless CMS codebase, which serves as the central repository for managing the fashion product data. Strapi offers a flexible and customizable content management system that allows easy creation and management of fashion products, categories, and other relevant data.

## API Documentation

https://documenter.getpostman.com/view/8647915/2s93z88PZt

## Prerequisites 

Before getting started with this application, make sure you have the following prerequisites installed on your system:

- Node.js (v14)
- Yarn (v1 or higher)
- MySQL Database

## Setup Instructions

To set up the fashion catalog application, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/rizalord/fashion-catalog.git
```

2. Install the dependencies for the frontend and backend:

```bash
cd frontend && yarn install
cd ../backend && yarn install
```

3. Create a new MySQL database for the application. You can use the following command to create a new database named `fashion_catalog`:

```bash
mysql -u root -p -e "CREATE DATABASE fashion_catalog"
```

4. Copy the `.env.example` file in the `backend` folder to `.env` and update the database credentials:

```bash
cp backend/.env.example backend/.env
```

5. Copy the `.env.example` file in the `frontend` folder to `.env` and update the API URL:

```bash
cp frontend/.env.example frontend/.env
```

6. Start the backend server:

```bash
cd backend && yarn develop
```

7. Start the frontend server:

```bash
cd frontend && yarn dev
```

8. Open the application in your browser at `http://localhost:5173` to view the fashion catalog application.

9. To access the Strapi admin panel, open `http://localhost:1337/admin` in your browser.

10. Done! You can now start using the fashion catalog application.


## Contributing

Contributions to the fashion catalog application are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
