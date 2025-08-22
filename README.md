Real-Time Collaborative Code Editor
A web-based, real-time collaborative code editor that allows multiple users to join a room, write, edit, and execute code together in various programming languages (JavaScript, Python, Java, C++). Built with Node.js, Express, Socket.IO, React, and Monaco Editor, it supports live code syncing, user presence, typing indicators, language switching, and secure code execution using Docker.
Features

🚀 Features

🤝 Real-Time Collaboration – Multiple users can edit simultaneously

🌐 Multi-Language Support – JavaScript, Python, Java, C++

👥 User Presence – Shows who’s in the room (join/leave notifications)

✍️ Typing Indicators – See when others are typing

🔄 Language Switching – Switch languages dynamically, synced across users

📋 Room System – Unique Room ID with copy/share support

🖥 Execution Console – Run code & see live output
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
 ├── backend/        # Node.js + Express + Socket.IO
 ├── frontend/       # React + Monaco Editor
 └── README.md       # Documentation


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
