// Updated backend code (server.js or index.js)

import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import fs from "fs";
import os from "os";
import { exec } from "child_process";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map();

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  let currentRoom = null;
  let currentUser = null;

  socket.on("join", ({ roomId, userName }) => {
    if (currentRoom) {
      socket.leave(currentRoom);
      rooms.get(currentRoom).delete(currentUser);
      io.to(currentRoom).emit("userJoined", Array.from(rooms.get(currentRoom)));
    }

    currentRoom = roomId;
    currentUser = userName;

    socket.join(roomId);

    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set());
    }

    rooms.get(roomId).add(userName);

    io.to(roomId).emit("userJoined", Array.from(rooms.get(currentRoom)));
  });

  socket.on("codeChange", ({ roomId, code }) => {
    socket.to(roomId).emit("codeUpdate", code);
  });

  socket.on("leaveRoom", () => {
    if (currentRoom && currentUser) {
      rooms.get(currentRoom).delete(currentUser);
      io.to(currentRoom).emit("userJoined", Array.from(rooms.get(currentRoom)));

      socket.leave(currentRoom);

      currentRoom = null;
      currentUser = null;
    }
  });

  socket.on("typing", ({ roomId, userName }) => {
    socket.to(roomId).emit("userTyping", userName);
  });

  socket.on("languageChange", ({ roomId, language }) => {
    io.to(roomId).emit("languageUpdate", language);
  });

  socket.on("executeCode", ({ roomId, code, language }) => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codeexec-"));
    let codeFileName;
    let cmd;

    switch (language) {
      case "javascript":
        codeFileName = "main.js";
        cmd = `node "${path.join(tempDir, codeFileName)}"`;
        break;
      case "python":
        codeFileName = "main.py";
        cmd = `python "${path.join(tempDir, codeFileName)}"`;
        break;
      case "java":
        codeFileName = "Main.java";
        cmd = `javac "${path.join(tempDir, codeFileName)}" && java -cp "${tempDir}" Main`;
        break;
      case "cpp":
        codeFileName = "main.cpp";
        const outFile = path.join(tempDir, "main");
        cmd = `g++ "${path.join(tempDir, codeFileName)}" -o "${outFile}" && "${outFile}"`;
        break;
      default:
        io.to(roomId).emit("codeOutput", "Unsupported language");
        fs.rm(tempDir, { recursive: true }, () => {});
        return;
    }

    const filePath = path.join(tempDir, codeFileName);

    try {
      fs.writeFileSync(filePath, code);
    } catch (err) {
      io.to(roomId).emit("codeOutput", `Error writing file: ${err.message}`);
      fs.rm(tempDir, { recursive: true }, () => {});
      return;
    }

    exec(cmd, { timeout: 5000 }, (error, stdout, stderr) => {
      let output = "";
      if (stdout) output += stdout;
      if (stderr) output += `\n${stderr}`;
      if (error) output += `\nError: ${error.message}`;

      io.to(roomId).emit("codeOutput", output);

      fs.rm(tempDir, { recursive: true }, () => {});
    });
  });

  socket.on("disconnect", () => {
    if (currentRoom && currentUser) {
      rooms.get(currentRoom).delete(currentUser);
      io.to(currentRoom).emit("userJoined", Array.from(rooms.get(currentRoom)));
    }
    console.log("user Disconnected");
  });
});

const port = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
