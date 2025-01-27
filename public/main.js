import { SearchProcess } from "./search_system/search-process.js";

export let resource;
$(function () {
  const FADE_TIME = 150; // ms

  //NGワード
  const ngwords = [
    "事故",
    "死亡",
    "骨折",
    "重傷",
    "殺害",
    "傷害",
    "暴力",
    "被害者",
    "放送事故",
    "ポルノ",
    "アダルト",
    "セックス",
    "バイブレーター",
    "マスターベーション",
    "オナニー",
    "スケベ",
    "羞恥",
    "セクロス",
    "エッチ",
    "SEX",
    "風俗",
    "童貞",
    "ペニス",
    "巨乳",
    "ロリ",
    "触手",
    "羞恥",
    "ノーブラ",
    "大麻",
    "麻薬",
    "基地外",
    "糞",
    "死ね",
    "殺す",
    "shit",
    "piss",
    "fuck",
    "cunt",
    "cocksucker",
    "motherfucker",
    "tits",
    "R18",
    "R-18",
    "例のアレ",
    "真夏の夜の淫夢",
    "アヘ顔",
    "亀頭",
    "へんたい",
    "ヘンタイ",
    "変態",
    "パンチラ",
    "♂",
    "アッー",
    "アナル",
    "アヘ顔",
    "イマラ",
    "淫",
    "運営のお気に入り",
    "エッチ",
    "MKT",
    "おっぱい",
    "オッパイ",
    "オナシャス",
    "ガチムチ",
    "姦",
    "元祖羞恥心",
    "亀頭",
    "KMR",
    "糞",
    "クルルァ",
    "グロ",
    "ゲイ",
    "ケツ",
    "殺",
    "シコ",
    "自分を売る",
    "18禁",
    "春画",
    "処女",
    "ショタ",
    "パイパン",
    "フェラ",
    "ふたなり",
    "ペニス",
    "へんたい",
    "ヘンタイ",
    "変態",
    "ホモ",
    "マラ",
    "まんこ",
    "マンコ",
    "野獣",
    "幼女",
    "ょぅ",
    "レイプ",
    "レズ",
    "ろり",
    "ロリ",
    "セックス",
    "せっくす",
    "安心のコメ率",
    "レスリングシリーズ",
    "来いよアグネス",
    "紳士",
    "運営仕事しろ",
    "例のプール",
    "https",
    "http",
    "*",
    "█",
    "シスコン",
    "@",
    "Heil Hitler",
    "Adorf Hitler",
    "ハイル・ヒトラー",
    "アドルフ・ヒトラー",
    "ヒムラー",
    "Himmler",
    "ラインハルト・ハイドリヒ",
    "Rheinheard Heydrich",
    "パウル・フォン・ヒンデンブルク",
    "Paul Von Hindenburg",
    "共産",
    "アカ",
    "ナチズム",
    "ネオナチ",
    "極右",
    "極左",
    "far right",
    "far left",
    "extreme left",
    "extreme right",
    "Communism",
    "レーニン",
    "天安門",
    "ポア",
    "Discord",
    "LINE",
    "Facebook",
    "nigger",
    "ニガー",
    "Instagram",
    "send this to",
    "skype",
    "WTF",
    "wtf",
    "W+F",
    "卍",
    "┳",
    "全裸",
    "1919",
    "4545",
    "斬首",
    "絞首",
    "タイヤネックレス",
    "現金",
    "殺人",
    "写真",
    "宗教",
    "性交",
    "ー",
    "～",
    "｜",
    "￥",
    "｛",
    "｝",
    "美乳",
    "娼婦",
    "”",
    "＊",
    "script",
    "exec",
    "<",
    ">",
    "＜",
    "＞",
    ".com",
    ".co",
    ".go",
    ".gov",
    ".lg",
    ".ed",
    "人民",
    "Nazism",
    "nazism",
    "Nationalsozialismus",
    "neo-Nazism",
    "Neonazismus",
    "neo-nazism",
    "neonazismus",
    "ファシズム",
    "fascismo",
    "fascism",
    "Faschismus",
    "Fascismo",
    "Fascism",
    "Faschismus",
    "中核派",
    "アルカイダ",
    "アルカーイダ",
    "Al-Qaeda",
    "al-qaeda",
    "القاعدة",
    "イスラム原理主義",
    "Islamic fundamentalism",
    "islamic fundamentalism",
    "ソープ",
    "ドヤ",
    "屠殺",
    "Negro",
    "ネグロ",
    "人非人",
    "精神障碍者",
    "精神障害者",
    "ガイジ",
    "KKK",
    "Ku Klux Klan",
    "クー・クラックス・クラン",
    "オウム真理教",
    "Prick",
    "Retarded",
    "Screw you",
    "bitch",
    "ビッチ",
    "Whore",
    "Erection",
    "Cunt",
    "Bullshit",
    "Bitch",
    "Asshole",
    "社会主義",
    "Socialism",
    "socialism",
    "ソ連",
    "ソビエト連邦",
    "ソビエト社会主義共和国連邦",
    "Union of Soviet Socialist Republics",
    "原爆",
    "原子爆弾",
    "核弾頭",
    "核",
    "Atomic Bomb",
    "atomic bomb",
    "Nuclear",
    "Nuke",
    "nuclear",
    "nuke",
    "全体主義",
    "Totalitarianism",
    "Totalitarismo",
    "チュチェ思想",
    "主体思想",
    "╰⋃╯",
  ];

  //#region エレメントの取得
  const $window = $(window);

  //入力フォームの取得
  const $usernameInput = $(".usernameInput");
  const $inputroomname = $(".roomname");
  const $inputMessage = $(".inputMessage");

  //チャットリストの取得
  const $message_list = $(".messages");

  //映像表示部の取得
  const $streaming_element = $(".streaming");
  //ページの取得
  const $login_page = $(".login.page");
  const $chat_page = $(".chat.page");

  //ボタンの取得
  const $login_button = $(".loginbtn");
  const $submit_button = $("#submit");
  const $startf_over_button = $(".login-error-popup__content--close_button");

  //スイッチの取得
  const $theme_change_switch = $("#themechangeswitch");
  //タブの取得
  const $tab1 = $("#tab_1");
  const $tab2 = $("#tab_2");

  //エラーウィンドウの取得
  const $login_error_window = $(".login-error-popup");
  const $error_sentence = $(".login-error-popup__content--error-content");

  //#endregion
  const socket = io();
  const SEARCH_PROCESS = new SearchProcess();

  //#region 処理用変数
  //ユーザーデータ保持用

  //各種フラグ
  let connected = false;
  let darkflag = false;
  //ユーザーデータ
  let user_data = {
    user_name: "",
    room_name: "",
  };

  //サーバー側の変数受け取り
  let room_data_list;
  let monster_id;

  //#endregion

  //#region 共通部分
  //NGワード含有チェック
  const on_ng_word_search = (search_source_word) => {
    for (var i = 0; i < ngwords.length; i++) {
      if (search_source_word.includes(ngwords[i])) {
        return true;
      }
    }
    return false;
  };

  //ルーム存在チェック
  const on_exist_room = (source_room_name) => {
    for (var i = 0; i < room_data_list.length; i++) {
      if (source_room_name == room_data_list[i].room_name) {
        return true;
      }
    }
    return false;
  };

  //ユーザーデータ設定
  const on_set_user_data = () => {
    user_data.user_name = cleanInput($usernameInput.val().trim());
    user_data.room_name = cleanInput($inputroomname.val().trim());

    if (user_data.user_name && user_data.room_name) {
      let name_includes_ng_word_flag = on_ng_word_search(user_data.user_name);
      if (name_includes_ng_word_flag == false) {
        let room_exist_flag = on_exist_room(user_data.room_name);
        if (room_exist_flag == true) {
          let temp_name = user_data.user_name;
          let temp_roomname = user_data.room_name;
          socket.emit("participant user", temp_name, temp_roomname);
          $login_page.fadeOut();
          $chat_page.show();
          $login_page.off("click");
        } else {
          $login_error_window.addClass("visible");
          $error_sentence.text(
            "ルームが存在しません。もう一度入力しなおしてください。"
          );
        }
      } else {
        $login_error_window.addClass("visible");

        $error_sentence.text(
          "ユーザー名にNGワードが含まれています。再度入力しなおしてください。"
        );
      }
    } else {
      $login_error_window.addClass("visible");

      $error_sentence.text(
        "ユーザー名かルーム名が入力されていません。再度入力してください。"
      );
    }
  };

  // Sends a chat message
  const on_send_message = () => {
    let message = $inputMessage.val();
    if (message) {
      message = cleanInput(message);
      $inputMessage.val("");
      if (message.includes("search")) {
        resource = message;
        let result_element = SEARCH_PROCESS.OnGetData(resource, monster_id);
        on_create_message_data({
          username,
          message: "ヒントが表示されました。Monpediaのタグから閲覧できます。",
        });
        $(".search")
          .append(result_element.image_hint_1_element)
          .append(result_element.image_hint_2_element)
          .append(result_element.sound_text_hint_element);
      } else {
        let message_includes_ng_word_flag = on_ng_word_search(message);
        if (!message_includes_ng_word_flag) {
          let username = user_data.user_name;
          on_create_message_data({ username, message });
          // tell server to execute 'new message' and send along one parameter
          socket.emit("new message", message);
        } else {
          $login_error_window.addClass("visible");

          $error_sentence.text(
            "メッセージにNGワードが含まれています。入力しなおしてください。"
          );
        }
      }
    } else {
      $login_error_window.addClass("visible");

      $error_sentence.text(
        "メッセージが入力されていません。再度入力してください。"
      );
    }
  };

  // Adds the visual chat message to the message list
  const on_create_message_data = (data, options = {}) => {
    // Don't fade the message in if there is an 'X was typing'
    const $typingMessages = getTypingMessages(data);
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    const $user_name_content = $('<span class="username"/>').text(
      data.username
    );
    const $message_body = $('<span class="messageBody">').text(data.message);
    const $message_content = $('<li class="chat__comment-list--my_message"/>')
      .data("username", data.username)
      .append($user_name_content, $message_body);

    on_create_message_element($message_content, options);
  };

  const on_create_message_element = (el, options) => {
    const $message_element = $(el);
    if (!options) {
      options = {};
    }
    if (typeof options.fade === "undefined") {
      options.fade = true;
    }
    if (typeof options.prepend === "undefined") {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $message_element.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $message_list.prepend($message_element);
    } else {
      $message_list.append($message_element);
    }

    $message_list[0].scrollTop = $message_list[0].scrollHeight;
  };

  // Prevents input from having injected markup
  const cleanInput = (input) => {
    return $("<div/>").text(input).text();
  };

  // Gets the 'X is typing' messages of a user
  const getTypingMessages = (data) => {
    return $(".typing.message").filter(function () {
      return $(this).data("username") === data.username;
    });
  };
  //#endregion

  //#region Socket.ioのイベント

  //新規メッセージ取得後表示
  socket.on("new message", (data) => {
    on_create_message_data(data);
  });

  //映像をページに追加
  socket.on("add movie", (data) => {
    $streaming_element.html(data);
  });
  socket.on("debug", (data) => {
    console.log(data);
  });
  //ルームデータを受け取り
  socket.on("send exist room list", (data) => {
    room_data_list = data;
  });
  socket.on("to supporter monster id", (data) => {
    console.log(data);
    monster_id = data;
  });
  //#endregion

  //#region DOMのイベント
  $window.keydown((event) => {
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        on_send_message();
      } else {
        on_set_user_data();
      }
    }
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(() => {
    $inputMessage.focus();
  });

  $theme_change_switch.click(function () {
    if (!darkflag) {
      $("#chat").addClass("darktheme");
      darkflag = true;
    } else {
      $("#chat").removeClass("darktheme");
      darkflag = false;
    }
  });
  $tab1.click(function () {
    $("#search").removeClass("search_visible");
  });
  $tab2.click(function () {
    $("#search").addClass("search_visible");
  });
  $submit_button.on("click", function () {
    on_send_message();
  });
  $login_button.on("click", function () {
    on_set_user_data();
  });
  $startf_over_button.on("click", function () {
    $login_error_window.removeClass("visible");
  });
  //#endregion
});
