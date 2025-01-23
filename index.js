// Setup basic express server
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;

// Routing
app.use(express.static(path.join(__dirname, "public")));

// Chatroom

let numUsers = 0;
let currentgroupcount = 0;
let addurl = [];
let grouparray = [];
let readerarray = [];
readerarray = ["0"];
grouparray = ["0"];
addurl = ["0"];
let saveroomname = "";

io.on("connection", (socket) => {
  let addedUser = false;
  io.to(socket.roomname).emit("chat message", "welcome!");

  // when the client emits 'new message', this listens and executes
  socket.on("new message", (data) => {
    // we tell the client to execute 'new message'
    socket.to(socket.roomname).emit("new message", {
      username: socket.username,
      message: data,
    });
  });
  socket.on("find room", (data) => {
    let current = 0;
    for (var i = 1; i < grouparray.length; i++) {
      if (grouparray[i] == data) {
        current = i;
        break;
      }
    }
    if (current == 0) {
      socket.emit("login error", {
        errorflag: true,
      });
    } else {
      socket.emit("login error", {
        errorflag: false,
        current: current,
      });
    }
  });
  // when the client emits 'add user', this listens and executes
  socket.on("add room", (username, roomname, url) => {
    if (addedUser) return;
    currentgroupcount++;
    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    socket.movieurl = url;
    readerarray[currentgroupcount] = roompass;
    addurl[currentgroupcount] = socket.movieurl;
    grouparray[currentgroupcount] = socket.roomname;
    ++numUsers;
    addedUser = true;

    socket.emit("login", {
      numUsers: numUsers,
    });

    // echo globally (all clients) that a person has connected

    socket.join(socket.roomname);
  });

  socket.on("add user", (username, roomname) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    socket.movieurl = addurl;
    var currentgroupnum = 0;
    ++numUsers;
    addedUser = true;
    for (var i = 1; i < grouparray.length; i++) {
      if (grouparray[i] == socket.roomname) {
        currentgroupnum = i;
        break;
      }
    }

    socket.searchnum = currentgroupnum;
    socket.emit("login", {
      numUsers: numUsers,
    });
    socket.emit("add movie", {
      movieurl: addurl[currentgroupnum],
    });
    socket.join(socket.roomname);
  });

  socket.on("load movie", (username, roomname) => {
    socket.username = username;
    socket.roomname = roomname;
    var nowurl = 0;
    for (var i = 1; i < grouparray.length; i++) {
      if (grouparray[i] == socket.roomname) {
        nowurl = i;
        break;
      }
    }
    socket.emit("add movie", {
      movieurl: addurl[nowurl],
    });
  });
  // when the client emits 'typing', we broadcast it to others
  socket.on("typing", () => {
    socket.broadcast.emit("typing", {
      username: socket.username,
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing", {
      username: socket.username,
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit("user left", {
        username: socket.username,
        numUsers: numUsers,
      });
      let nowroom = 0;
      for (var i = 1; i < grouparray.length; i++) {
        if (grouparray[i] == socket.roomname) {
          nowroom = i;
          break;
        }
      }
      if (socket.username == readerarray[nowroom]) {
        grouparray[nowroom] = null;
        addurl[nowroom] = null;
        readerarray[nowroom] = null;
        for (var j = nowroom + 1; j < grouparray.length; j++) {
          grouparray[j - 1] = grouparray[j];
          addurl[j - 1] = addurl[j];
          readerarray[j - 1] = readerarray[j];
        }
      }
    }
  });
});
