# THEPOST Backend Documentation

## Overview
THEPOST is a social media management application that allows users to create, schedule, and manage their social media posts across various platforms such as Facebook and YouTube. This backend service is built using Node.js and Express, providing a RESTful API for the frontend application.

## Project Structure
```
backend
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains the business logic for handling requests
│   │   └── socialMediaController.js
│   ├── models                  # Defines the data models
│   │   └── userModel.js
│   ├── routes                  # Defines the API routes
│   │   └── socialMediaRoutes.js
│   └── utils                   # Utility functions for API integration
│       └── apiIntegration.js
├── package.json                # NPM configuration file
└── README.md                   # Documentation for the backend
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/THEPOST.git
   ```
2. Navigate to the backend directory:
   ```
   cd THEPOST/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the backend directory and add your environment variables (e.g., database connection string, API keys).
5. Start the server:
   ```
   npm start
   ```

## API Usage
The backend exposes several endpoints for managing social media posts. Below are the key routes:

- **POST /api/posts**: Create a new post.
- **GET /api/posts**: Retrieve all posts.
- **DELETE /api/posts/:id**: Delete a post by ID.

Refer to the `socialMediaRoutes.js` file for detailed route definitions and the `socialMediaController.js` for the implementation of the business logic.

## Dependencies
- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- dotenv: Module to load environment variables from a `.env` file

## Contributing
Feel free to submit issues or pull requests to improve the project. Your contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.