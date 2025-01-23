// Setup basic express server
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

// Routing
app.use(express.static(path.join(__dirname, "public")));

// Chatroom

let numUsers = 0;
let current_group_count = 0;

//#region 処理用変数
//ルーム保存配列
let room_data_list = [];
//ルームデータ
let room_data = {
  room_name: "",
  movie_url: "",
  reader_name: "",
};
//#endregion

//#region 共通部分
//ルーム検索
const on_room_search = (search_source_room_name) => {
  for (var i = 1; i < grouparray.length; i++) {
    if (grouparray[i] == search_source_room_name) {
      return i;
    }
  }
  return grouparray.length;
};
//#endregion
io.on("connection", (socket) => {
  let addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on("new message", (data) => {
    // we tell the client to execute 'new message'
    socket.to(socket.roomname).emit("new message", {
      username: socket.username,
      message: data,
    });
  });

  // when the client emits 'participant user', this listens and executes
  socket.on("create room", (username, roomname, url, roompass) => {
    if (addedUser) return;
    current_group_count++;
    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    socket.movieurl = url;

    room_data.room_name = roomname;
    room_data.movie_url = url;
    room_data.reader_name = username;

    room_data_list[current_group_count] = room_data;
    addedUser = true;

    // echo globally (all clients) that a person has connected

    socket.join(socket.roomname);
  });

  socket.on("participant user", (username, roomname) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    socket.movieurl = addurl;

    let belong_room_subscript = on_room_search(roomname);
    addedUser = true;
    if (room_data[belong_room_subscript].movie_url != null) {
      socket.emit("add movie", {
        movieurl: room_data[belong_room_subscript].movie_url,
      });
    }

    socket.join(socket.roomname);
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numUsers;
    }
  });
});
