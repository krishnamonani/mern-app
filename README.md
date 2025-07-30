🛒 MERN Stack Product Store ✨
A modern, full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack.This project is a feature-rich product management system, enabling seamless CRUD (Create, Read, Update, Delete) operations for managing products with a sleek, user-friendly interface.

🌟 Features

🛠️ Full CRUD Functionality – Create, read, update, and delete products with ease.
📱 Responsive Design – Stunning UI with Chakra UI, optimized for desktop, tablet, and mobile.
⚙️ RESTful API – Robust backend API powered by Node.js and Express.js.
🚀 Efficient State Management – Lightweight and scalable global state with Zustand.
🌗 Light/Dark Mode – Toggle between themes for a personalized experience.
🔄 Real-time Updates – Instant UI refresh after product operations, no page reloads needed.
🎨 Polished UI/UX – Clean, modern design with smooth animations and transitions.


🛠️ Tech Stack
🌐 Frontend

React – Dynamic, component-based UI.
Vite – Lightning-fast build tool.
Chakra UI – Accessible, customizable UI components.
Zustand – Minimalist state management.
React Router – Seamless client-side routing.

🔧 Backend

Node.js – Scalable server-side runtime.
Express.js – Fast, minimalist web framework.
Mongoose – Elegant MongoDB object modeling.

🗄️ Database

MongoDB – NoSQL database for flexible data storage.


📂 Project Structure
mern-product-store/
├── 📁 backend/                  # Backend codebase
│   ├── 📁 config/               # Database connection setup
│   ├── 📁 controllers/          # Request handling logic
│   ├── 📁 models/               # Mongoose schemas
│   ├── 📁 routes/               # Express API routes
│   └── 📄 server.js             # Backend entry point
├── 📁 frontend/                 # Frontend codebase
│   ├── 📁 src/                  # React source files
│   │   ├── 📁 components/       # Reusable UI components
│   │   ├── 📁 pages/            # Route-based pages
│   │   ├── 📁 store/            # Zustand state management
│   │   ├── 📄 App.jsx           # Main React app component
│   │   └── 📄 main.jsx          # Frontend entry point
│   └── 📄 vite.config.js        # Vite configuration
├── 📄 .env                      # Environment variables
├── 📄 package.json              # Project dependencies
└── 📄 README.md                 # You're here! 🚀


🚀 Getting Started
Follow these steps to get the project up and running locally.
📋 Prerequisites
Ensure you have the following installed:

Node.js (v14+) – JavaScript runtime.
npm or Yarn – Package managers.
MongoDB – Local or cloud-based (MongoDB Atlas).


⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/krishnamonani/mern-crash-course.git
cd mern-crash-course

2. Install Backend Dependencies
npm install

3. Install Frontend Dependencies
npm install --prefix frontend

4. Set Up Environment Variables
Create a .env file in the backend/ directory with the following:
MONGO_URI=your_mongodb_connection_string
PORT=5000


💡 Tip: Use MongoDB Atlas for a free cloud database.

5. Run in Development Mode
Start the Backend
npm run dev

Runs at: 🌐 http://localhost:5000
Start the Frontend
In a new terminal:
cd frontend
npm run dev

Runs at: 🌐 http://localhost:5173

🔒 API Endpoints



Method
Endpoint
Description



GET
/api/products
Retrieve all products


POST
/api/products
Create a new product


PUT
/api/products/:id
Update a product by ID


DELETE
/api/products/:id
Delete a product by ID



📩 All API responses are in JSON format.


🏗️ Build for Production
1. Build the Frontend
cd frontend
npm run build

This creates a production-ready frontend in frontend/dist.
2. Serve via Backend
From the root directory:
npm run start

Access the full app at: 🌐 http://localhost:5000

📜 Available Scripts
Backend (Root Directory)

npm run dev – Launches backend in development mode with nodemon.
npm run start – Runs backend in production mode.

Frontend (from /frontend)

npm run dev – Starts frontend development server.
npm run build – Generates production build.


🌱 Future Improvements

🔐 Add authentication (JWT or OAuth).
👥 Implement role-based access control (Admin/User).
🔍 Add product categories and search filters.
📄 Support pagination and lazy loading for large datasets.
☁️ Deploy to cloud platforms like Vercel or Render.