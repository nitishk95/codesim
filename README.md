Real-Time Collaborative Code Editor
A web-based, real-time collaborative code editor that allows multiple users to join a room, write, edit, and execute code together in various programming languages (JavaScript, Python, Java, C++). Built with Node.js, Express, Socket.IO, React, and Monaco Editor, it supports live code syncing, user presence, typing indicators, language switching, and secure code execution using Docker.
Features

Real-Time Collaboration: Multiple users can edit code simultaneously in a shared room, with changes reflected instantly.
Language Support: Write and execute code in JavaScript, Python, Java, and C++.
Code Execution: Run code securely in isolated Docker containers, with output displayed in a dedicated console.
User Management: Displays users in the room and notifies when users join or leave.
Typing Indicator: Shows when a user is typing, with a truncated username for clarity.
Language Switching: Dynamically switch languages, updating the editor for all users in the room.
Room System: Users join rooms using a unique Room ID, with a "Copy ID" feature for sharing.
Secure Execution: Code runs in sandboxed Docker containers with memory/CPU limits, no network access, and a 5-second timeout.

Tech Stack

Backend: Node.js, Express, Socket.IO, Dockerode (for Docker integration)
Frontend: React, Monaco Editor (VS Code editor), Socket.IO-client
Execution Environment:
Styling: CSS (custom styles for layout and UI components)

Prerequisites

Node.js (v16 or higher)
npm (for installing dependencies)
Modern web browser (for frontend)

Installation

Clone the Repository:
git clone <repository-url>
cd code-editor


Install Backend Dependencies:
cd backend
npm install


Install Frontend Dependencies:
cd frontend
npm install







Build the Frontend:
cd frontend
npm run build


Run the Server:
cd backend
npm start

The server runs on http://localhost:3000 by default.


Usage

Access the App: Open http://localhost:3000 in a browser.
Join a Room:
Enter a unique Room ID and your username.
Click "Join Room" to enter the collaborative editor.


Edit Code:
Use the Monaco Editor to write code.
Changes sync in real-time for all users in the room.


Switch Languages:
Select a language (JavaScript, Python, Java, C++) from the dropdown.
The editor updates for all users.


Execute Code:
Click "Execute Code" to run the code 
Output appears in the console below the editor.


Share Room:
Click "Copy ID" to copy the Room ID and share it with others.


Leave Room:
Click "Leave Room" to exit and reset the editor.


code-editor/
├── backend/
│ ├── index.js # Node.js server with Express, Socket.IO, and Docker
│ ├── package.json # Backend dependencies
│ └── node_modules/
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main React component with editor and UI
│ │ ├── App.css # Styles for the frontend
│ │ └── index.js # React entry point
│ ├── dist/ # Built frontend assets
│ ├── package.json # Frontend dependencies
│ └── node_modules/
└── README.md # Project documentation

Code Execution Details







Limitations:
No support for user input (stdin).
Output is text-only, captured from stdout/stderr.
Java/C++ code must follow naming conventions (Main class or main function).



Security Considerations


Future Improvements

Add support for user input (stdin) via Docker’s interactive mode.
Support additional languages or custom libraries.
Optimize performance with container pooling.
Add authentication for room access.
Enhance UI with resizable editor/output panels.

.


Frontend Issues: Verify npm run build completed and dist/ folder exists.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.

License
nitish@k95 NITKKR
