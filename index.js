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
let monster_id = 0;
//#region 処理用変数
//ルーム保存配列
let room_data_list = [];
//ルームデータ
let room_data = {
  room_name: "",
  movie_url: "",
  reader_name: "",
  monster_id: "",
};
//#endregion

//#region 共通部分
//ルーム検索
const on_room_search = (search_source_room_name) => {
  for (var i = 0; i < room_data_list.length; i++) {
    if (room_data_list[i].room_name == search_source_room_name) {
      return i;
    }
  }
  return room_data_list.length;
};
//削除時のデータずらし
const on_room_data_change = (delete_room_subscript) => {
  for (var i = delete_room_subscript; i < room_data_list.length; i++) {
    room_data_list[i - 1] = room_data_list[i];
  }
};
//#endregion
io.on("connection", (socket) => {
  socket.emit("send exist room list", room_data_list);
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
  socket.on("create room", (username, roomname, url, monsterid) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    socket.movieurl = url;

    room_data.room_name = roomname;
    room_data.movie_url = socket.movieurl;
    room_data.reader_name = username;
    room_data.monster_id = monsterid;
    room_data_list[current_group_count] = room_data;
    addedUser = true;
    monster_id = monsterid;
    current_group_count++;
    // echo globally (all clients) that a person has connected

    socket.join(socket.roomname);
  });

  socket.on("participant user", (username, roomname) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    socket.roomname = roomname;
    let belong_room_subscript = on_room_search(roomname);
    addedUser = true;
    if (room_data_list[belong_room_subscript] != null) {
      socket.emit("add movie", room_data_list[belong_room_subscript].movie_url);
    } else {
      socket.emit("debug", room_data_list[belong_room_subscript]);
    }
    socket.emit(
      "to supporter monster id",
      room_data_list[belong_room_subscript].monster_id
    );
    socket.join(socket.roomname);
  });
  //ログアウト時の処理
  socket.on("logout", () => {
    let my_room_subscript = on_room_search(socket.roomname);
    if (my_room_subscript < room_data_list.length) {
      if (room_data_list[my_room_subscript].reader_name == socket.username) {
        room_data_list[my_room_subscript] = null;
        on_room_data_change(my_room_subscript);
      }
    }
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numUsers;
    }
  });
});
