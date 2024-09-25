# System Design Document

## Orin Pao | IIT Delhi | Dept. - CSE
## Introduction 
The document outlines the architecture, components, data flow, and design decisions for the Chatting Service prototype.
The application includes both frontend and backend services to facilitate real-time messaging between users.

## Architecture -
### Client (React App):
User Interface (UI) components for login, registration, and chat.
API calls to the backend for data retrieval and updates.

### Backend (Node.js):
Authentication Controller: Handles user login and registration.
Messaging Controller: Manages message storage and retrieval.
WebSocket Server: Maintains real-time communication channels.

### Database (MongoDB):
users -> Collection: Stores user information.
messages -> Collection: Stores chat messages.

## Component Design
### Frontend Components
Login Component:
    Handles user login with username and password.
    Sends credentials to the backend for authentication.

Chat Component:
    Displays a list of messages.

### Backend Components
Authentication Controller:
    Register: Creates a new user with hashed password.
    Login: Authenticates user and returns a JWT token.

Messaging Controller:
    Save Messages: Stores messages in the database.
    Retrieve Messages: Fetches previous messages for the user.


## Technologies and Libraries Used
### Frontend:
React.js: For building UI components.
Axios: For making HTTP requests.

### Backend:
Express.js: For creating RESTful APIs.
Mongoose: For interacting with MongoDB.
bcryptjs: For hashing passwords.
jsonwebtoken: For handling JWT tokens.
Socket.io: For real-time WebSocket communication.
CORS: For handling cross-origin resource sharing.

### Database:
MongoDB: For storing user credentials and chat messages.

## Setup Guide
Clone the repository 
```
git clone https://github.com/g33ky-sl0th/chatting-service.git
```

In chatting-service/backend directory
```
npm install
nodemon
```

In chatting-service/frontend directory
```
npm install
npm run dev
```

In your browser - go to -> http://localhost:3000/

# Start chatting !





