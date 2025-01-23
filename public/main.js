$(function () {
  const FADE_TIME = 150; // ms
  const TYPING_TIMER_LENGTH = 400; // ms

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
  const $messages = $(".messages");

  //ページの取得
  const $loginPage = $(".login.page");
  const $chatPage = $(".chat.page");

  //ボタンの取得
  const $loginbtn = $(".loginbtn");
  const $submit_button = $("#submit");

  //タブの取得
  const $tab1 = $("#tab_1");
  const $tab2 = $("#tab_2");

  //#endregion
  const socket = io();

  //#region 処理用変数
  //ユーザーデータ保持用
  let username;
  let roomname;

  //ユーザーデータ一時保存用
  let tempusername;
  let temproomname;

  //各種フラグ
  let connected = false;
  let typing = false;
  let errorflg;
  //#endregion

  let lastTypingTime;
  let current;
  // Sets the client's username
  const setUsername = () => {
    username = cleanInput($usernameInput.val().trim());
    roomname = cleanInput($inputroomname.val().trim());
    tempusername = username;
    temproomname = roomname;
    let nameNgWordsFlag;
    for (var i = 0; i < ngwords.length; i++) {
      if (username.includes(ngwords[i])) {
        nameNgWordsFlag = true;
        break;
      }
    }
    // If the username is valid
    socket.emit("find room", roomname);
    console.log(current);
    if (username && roomname && !nameNgWordsFlag && !errorflg) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off("click");
      $currentInput = $inputMessage.focus();

      // Tell the server your username
      socket.emit("add user", username, roomname);

      socket.on("add movie", (data) => {
        console.log(data);
        $(".streaming").html(data.movieurl);
      });
    } else if (nameNgWordsFlag) {
      alert("NGワードが含まれています。入力しなおしてください。");
      nameNgWordsFlag = false;
    } else {
      alert("ユーザー名かルームIDが正しくありません。");
    }
  };
  $("#loadmovie").on("click", function () {
    socket.emit("add movie", tempusername, temproomname);
  });
  $loginbtn.on("click", function () {
    username = cleanInput($usernameInput.val().trim());
    roomname = cleanInput($inputroomname.val().trim());
    // If the username is valid
    let nameNgWordsButtonFlag;
    for (var i = 0; i < ngwords.length; i++) {
      if (username.includes(ngwords[i])) {
        nameNgWordsButtonFlag = true;
        break;
      }
    }
    socket.emit("find room", roomname);

    console.log(current);
    if (username && roomname && !nameNgWordsButtonFlag && !errorflg) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off("click");
      $currentInput = $inputMessage.focus();

      // Tell the server your username

      socket.emit("add user", username, roomname);
    } else if (nameNgWordsButtonFlag) {
      alert("NGワードが含まれています。入力しなおしてください。");
      nameNgWordsFlag = false;
    } else {
      alert("ユーザー名かルームIDが正しくありません。");
    }
  });
  socket.on("add movie", (data) => {
    console.log(data);
    $(".streaming").html(data.movieurl);
  });
  // Sends a chat message
  $submit_button.on("click", function () {
    let message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    let messageNgWordsButtonFlag;
    for (var i = 0; i < ngwords.length; i++) {
      if (message.includes(ngwords[i])) {
        messageNgWordsButtonFlag = true;
        break;
      }
    }
    // if there is a non-empty message and a socket connection
    if (message && connected && !messageNgWordsButtonFlag) {
      $inputMessage.val("");
      addChatMessage({ username, message });
      // tell server to execute 'new message' and send along one parameter
      socket.emit("new message", message);
    } else if (messageNgWordsButtonFlag) {
      alert("NGワードが含まれています。入力しなおしてください。");
    } else {
      alert("入力されていません。再度入力してください。");
    }
  });
  const sendMessage = () => {
    let message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    let messageNgWordsFlag;
    for (var i = 0; i < ngwords.length; i++) {
      if (message.includes(ngwords[i])) {
        messageNgWordsFlag = true;
        break;
      }
    }
    // if there is a non-empty message and a socket connection
    if (message && connected && !messageNgWordsFlag) {
      $inputMessage.val("");
      addChatMessage({ username, message });
      // tell server to execute 'new message' and send along one parameter
      socket.emit("new message", message);
    } else if (messageNgWordsFlag) {
      alert("NGワードが含まれています。入力しなおしてください。");
      messageNgWordsFlag = false;
    } else {
      alert("入力されていません。再度入力してください。");
    }
  };
  // Log a message
  const log = (message, options) => {
    const $el = $("<li>")
      .addClass("chat__comment-list--other_message")
      .text(message);
    addMessageElement($el, options);
  };

  // Adds the visual chat message to the message list
  const addChatMessage = (data, options = {}) => {
    // Don't fade the message in if there is an 'X was typing'
    const $typingMessages = getTypingMessages(data);
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    const $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css("color", getUsernameColor(data.username));
    const $messageBodyDiv = $('<span class="messageBody">').text(data.message);

    const typingClass = data.typing ? "typing" : "";
    const $messageDiv = $('<li class="chat__comment-list--my_message"/>')
      .data("username", data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  };

  // Adds the visual chat typing message
  const addChatTyping = (data) => {
    data.typing = true;
    data.message = "is typing";
    addChatMessage(data);
  };

  // Removes the visual chat typing message
  const removeChatTyping = (data) => {
    getTypingMessages(data).fadeOut(function () {
      $(this).remove();
    });
  };

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  const addMessageElement = (el, options) => {
    const $el = $(el);
    // Setup default options
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
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }

    $messages[0].scrollTop = $messages[0].scrollHeight;
  };

  // Prevents input from having injected markup
  const cleanInput = (input) => {
    return $("<div/>").text(input).html();
  };

  // Updates the typing event
  const updateTyping = () => {
    if (connected) {
      if (!typing) {
        typing = true;
      }
      lastTypingTime = new Date().getTime();

      setTimeout(() => {
        const typingTimer = new Date().getTime();
        const timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  };

  // Gets the 'X is typing' messages of a user
  const getTypingMessages = (data) => {
    return $(".typing.message").filter(function (i) {
      return $(this).data("username") === data.username;
    });
  };

  // Gets the color of a username through our hash function
  const getUsernameColor = (username) => {
    // Compute hash code
    let hash = 7;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
  };

  // Keyboard events

  $window.keydown((event) => {
    // Auto-focus the current input when a key is typed

    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on("input", () => {
    updateTyping();
  });

  // Click events

  // Focus input when clicking on the message input's border
  $inputMessage.click(() => {
    $inputMessage.focus();
  });

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on("login", (data) => {
    connected = true;

    addParticipantsMessage(data);
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on("new message", (data) => {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on("user joined", (data) => {
    addParticipantsMessage(data);
  });
  socket.on("add movie", (data) => {
    console.log(data);
    $(".streaming").html(data.movieurl);
  });
  // Whenever the server emits 'user left', log it in the chat body
  socket.on("user left", (data) => {
    addParticipantsMessage(data);
    removeChatTyping(data);
  });
  socket.on("login error", (data) => {
    errorflg = data.errorflag;
    current = data.current;
  });
  let darkflag = false;
  $("#themechangeswitch").click(function () {
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
});
