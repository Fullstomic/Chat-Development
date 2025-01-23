
$(function () {
    
    //NGワードの設定
    const NGWORDS = [
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

    //URLパラメーターの取得・データ設定
    let current_page_url = new URL(window.location.href);
    $room_name_input.val(current_page_url.searchParams.get("roomid"))

    //#region エレメントの取得
        //入力エレメントの取得
        const $window = $(window);
        const $user_name_input = $(".usernameInput");
        const $room_name_input = $(".roomname");
        const $message_list = $(".messages");
        const $message_input = $(".inputMessage");

        //ページエレメントの取得
        const $login_page = $(".login.page");
        const $chat_page = $(".chat.page");
        const $id_chat_page = $("#chat");
        const $search_page = $("#search");

        //ボタンエレメントの取得
        const $login_button = $(".loginbtn");
        const $submit_button = $("#submit");

        //タブエレメントの取得
        const $tab1 = $("#tab_1");
        const $tab2 = $("#tab_2");

        //そのほかエレメントの取得
        const $movie_display = $(".streaming");
        const $theme_change_switch = $("#themechangeswitch");
    //#endregion
    //Socket.ioの使用
    const socket = io();

    //#region 処理用変数
        //ユーザーデータ保持用
        let processing_user_name;
        let processing_room_name;

        //ルームデータ保存用
        let room_array;

        //接続可否
        let connected;

        //フラグ
        let darkflag;
    //#endregion
    
    //保存用データ
    let user_data = {
        username: processing_user_name,
        roomname: processing_room_name,
    };

    //#region 共通部分
        //入力データの挿入・削除
        const clean_input = (input) => {
            return $("<div/>").text(input).html();
        };

        //NGワードの検出
        const on_detection_ng_words = (detection_words) => {
            for(var i = 0; i < NGWORDS.length; i++) {
                if(detection_words.includes(NGWORDS[i])) {
                    return true;
                }
            }
            return false;
        };

        //ユーザーデータの設定
        const on_set_user_data = () => {
            processing_user_name = clean_input($user_name_input.val().trim());
            processing_room_name = clean_input($room_name_input.val().trim());
            if(!processing_user_name && !processing_room_name) {             
                let user_name_ng_words_flag = on_detection_ng_words(user_data.username);
                if(!user_name_ng_words_flag) {
                    $login_page.fadeOut();
                    $chat_page.show();
                    socket.emit("participant user", user_data.username, user_data.roomname);
                }else{
                    processing_room_name = null;
                    processing_user_name = null;
                    alert("NGワードが含まれています。再度入力しなおしてください。");
                }
            }else{
                alert("ユーザー名かルームが入力されていません。再度入力してください。");
            }            
        };

        //チャット送信
        const on_send_message = () => {
            let message = clean_input($message_input.val().trim());
            if(!message) {
                let message_ng_flag = on_detection_ng_words(message);
                if(!message_ng_flag) {
                    if(message.includes(SEARCH_UUID)) {
                        let search_data = monster_search.conversion_data(message);
                    }else{
                        socket.emit("new message", message);
                    }
                    
                }else{
                    alert("NGワードが含まれています。入力しなおしてください。");
                }
            }else{
                alert("入力されていません。再度入力してください。");
            }
        }

        
        //エレメント生成
        const on_create_chat_element = (data, options = {}) => {
            const $user_name_content = $('<span class="username" />').text(data.username);
            const $message_body_content = $('<span class="messageBody">').text(data.message);
            const $message_element = $('<li class="chat__comment-list--my_message"/>').data("username", data.username).append($user_name_content, $message_body_content);
            on_add_chat_list($message_element);
        };

        //エレメントリスト追加
        const on_add_chat_list = (elment, options) => {
            const $element = $(elment);
            if(!options) options = {};
            if(typeof options.fade === "undefined") options.fade = true;
            if(typeof options.prepend === "undefined") options.prepend = false;
            if(options.fade) $element.hide().fadeIn();
            if(options.prepend) {
                $message_list.prepend($element);
            }else{
                $message_list.append($element);
            }
            $message_list[0].scrollTop = $message_list[0].scrollHeight;
        };

        //キーボードのイベント
        $window.keydown((event) => {
            if (event.which === 13) {
                if(processing_user_name) {
                    on_send_message();
                } else {
                    on_set_user_data();
                }
            }
        });

        //
    //#endregion
    //#region Socket.ioのイベント
        //ログイン
        socket.on("login", (data) => {
            connected = true;
        });

        //映像表示
        socket.on("send movie", (data) => {
            $movie_display.html(data.movieurl);
        });

        //他ユーザーからのメッセージを出力
        socket.on("new message", (data) => {
            on_create_chat_element(data);
        });
    //#endregion
    //#region エレメント関係のイベント
        //スイッチによるテーマモードの変更
        $theme_change_switch.click(function() {
            if(!darkflag) {
                $id_chat_page.addClass("darktheme");
                darkflag = true;
            }else{
                $id_chat_page.removeClass("darktheme");
                darkflag = false;
            }
        });

        //タブによる表示変更
        $tab1.click(function () {
            $search_page.removeClass("search_visible");
        });
        $tab2.click(function () {
            $search_page.addClass("search_visible");
        });
    //#endregion
});