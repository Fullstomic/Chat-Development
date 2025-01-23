const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

//処理用の変数
let current_group_count = 0;

//ルームデータ一時保存用
let url;
let room;
let reader_name;

//ルームデータ保存用
let room_array = [];
let room_data = {
  movieurl: url,
  room_name: room,
  readername: reader_name,
};

//Socket.ioサーバー側の処理
io.on("connection", (socket) => {
  let addedUser = false;

  //共通部分の処理
  //ユーザーデータの設定
  const on_set_data = (username, roomname) => {
    socket.username = username;
    socket.roomname = roomname;
    addedUser = true;
  };

  //ルーム検索
  const on_search_room = (roomname) => {
    for (var i = 0; i < room_array.length; i++) {
      if (room_array[i].room_name == roomname) {
        return i;
      }
    }
    return "not_found_room";
  };

  //新規メッセージの送信
  socket.on("new message", (data) => {
    socket.to(socket.roomname).emit("new message", {
      sender_name: socket.username,
      message: data,
    });
  });

  //ルーム作成
  socket.on("create room", (username, roomname, url) => {
    on_set_data(username, roomname);
    socket.movieurl = url;
    room_data.room_name = socket.roomname;
    room_data.url = socket.movieurl;
    room_data.readername = socket.username;
    room_array[current_group_count] = room_data;
    current_group_count++;
    socket.join(socket.roomname);
  });

  //ルーム参加
  socket.on("participant user", (username, roomname) => {
    on_set_data(username, roomname);
    let room_search_result = on_search_room(roomname);
    socket.emit("send room data", room_array);
    socket.emit("send movie", {
      movieurl: room_array[room_search_result].movieurl,
    });
    socket.join(room_array[room_search_result].room_name);
  });

  //ログアウト
  socket.on("log out", () => {
    let room_search_result = on_search_room(socket.roomname);
    if (socket.username == room_array[room_search_result].room_name) {
      room_array[room_search_result] = null;
      for (var i = room_search_result + 1; i < room_array.length - 2; i++) {
        room_array[i - 1] = room_array[i];
      }
      current_group_count--;
    }
  });

  //切断
  socket.on("disconnect", () => {});
});
