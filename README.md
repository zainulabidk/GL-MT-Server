gl-infotech-backend/
├── models/
│   └── User.js                # MongoDB User model
├── controllers/
│   ├── authController.js       # Handles registration, login, reset password
│   └── userController.js       # Handles profile management and user listing
├── routes/
│   ├── authRoutes.js           # Routes for authentication
│   └── userRoutes.js           # Routes for user management
├── middleware/
│   └── authMiddleware.js       # Middleware for token verification
├── utils/
│   └── upload.js               # Multer configuration for file uploads
├── .env                        # Environment variables
├── server.js                   # Entry point for the backend
└── package.json                # Backend dependencies

Setup Instructions
Backend
Clone the repository:

bash
Copy
git clone <repository-url>
cd gl-infotech-backend
Install dependencies:

bash
Copy
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start the backend server:

bash
Copy
npm start