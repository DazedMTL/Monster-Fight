// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  {
    name: "Community_Basic",
    status: true,
    description: "基本的なパラメーターを設定するプラグインです。",
    parameters: {
      cacheLimit: "20",
      screenWidth: "816",
      screenHeight: "624",
      changeWindowWidthTo: "",
      changeWindowHeightTo: "",
      renderingMode: "auto",
      alwaysDash: "off",
    },
  },
  {
    name: "MadeWithMv",
    status: false,
    description:
      'メイン画面へ進む前に、"Made with MV"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。',
    parameters: {
      "Show Made With MV": "true",
      "Made with MV Image": "MadeWithMv",
      "Show Custom Splash": "false",
      "Custom Image": "",
      "Fade Out Time": "120",
      "Fade In Time": "120",
      "Wait Time": "160",
    },
  },
  {
    name: "YEP_CoreEngine",
    status: true,
    description:
      "v1.16 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.",
    parameters: {
      "---Screen---": "",
      "Screen Width": "960",
      "Screen Height": "720",
      "Scale Battlebacks": "true",
      "Scale Title": "true",
      "Scale Game Over": "true",
      "Open Console": "false",
      "Reposition Battlers": "true",
      "GameFont Load Timer": "0",
      "---Gold---": "",
      "Gold Max": "99999999",
      "Gold Font Size": "20",
      "Gold Icon": "313",
      "Gold Overlap": "A lotta",
      "---Items---": "",
      "Default Max": "99",
      "Quantity Text Size": "20",
      "---Stats---": "",
      "Max Level": "99",
      "Actor MaxHP": "9999",
      "Actor MaxMP": "9999",
      "Actor Parameter": "999",
      "Enemy MaxHP": "999999",
      "Enemy MaxMP": "9999",
      "Enemy Parameter": "999",
      "---Battle---": "",
      "Animation Rate": "4",
      "Flash Target": "false",
      "---Font---": "",
      "Chinese Font": "SimHei, Heiti TC, sans-serif",
      "Korean Font": "Dotum, AppleGothic, sans-serif",
      "Default Font": "GameFont, Verdana, Arial, Courier New",
      "Font Size": "17",
      "Text Align": "left",
      "---Windows---": "",
      "Digit Grouping": "true",
      "Line Height": "26",
      "Icon Width": "32",
      "Icon Height": "32",
      "Face Width": "144",
      "Face Height": "144",
      "Window Padding": "18",
      "Text Padding": "6",
      "Window Opacity": "255",
      "Gauge Outline": "true",
      "Gauge Height": "18",
      "Menu TP Bar": "false",
      "---Window Colors---": "",
      "Color: Normal": "0",
      "Color: System": "16",
      "Color: Crisis": "17",
      "Color: Death": "18",
      "Color: Gauge Back": "19",
      "Color: HP Gauge 1": "20",
      "Color: HP Gauge 2": "21",
      "Color: MP Gauge 1": "22",
      "Color: MP Gauge 2": "23",
      "Color: MP Cost": "23",
      "Color: Power Up": "24",
      "Color: Power Down": "25",
      "Color: TP Gauge 1": "28",
      "Color: TP Gauge 2": "29",
      "Color: TP Cost Color": "29",
    },
  },
  {
    name: "ParallaxesNonBlur",
    status: true,
    description: "視差ゼロ遠景のぼかし除去プラグイン",
    parameters: {},
  },
  {
    name: "ParallaxLayerMap",
    status: true,
    description: "多層レイヤー一枚絵マッププラグイン",
    parameters: {},
  },
  {
    name: "CustomizeConfigDefault",
    status: true,
    description: "オプションデフォルト値設定プラグイン",
    parameters: {
      常時ダッシュ: "ON",
      コマンド記憶: "OFF",
      BGM音量: "100",
      BGS音量: "100",
      ME音量: "100",
      SE音量: "100",
      常時ダッシュ消去: "ON",
      コマンド記憶消去: "ON",
      BGM音量消去: "OFF",
      BGS音量消去: "OFF",
      ME音量消去: "OFF",
      SE音量消去: "OFF",
    },
  },
  {
    name: "HPMPLVInvisible",
    status: true,
    description: "HP・MP・レベルを非表示にできます",
    parameters: { isVisibleHP: "1", isVisibleMP: "0", isVisibleLV: "0" },
  },
  {
    name: "MpiComposePicture",
    status: true,
    description: "2つのピクチャを合成します。",
    parameters: { "Plugin Command": "compose_picture" },
  },
  {
    name: "MessageWindow_Opacity_riru",
    status: false,
    description:
      "スイッチがONの場合メッセージタイプが通常でも背景を透明にします。入力めんどくせぇ！の方用",
    parameters: { "Opacity Switch Id": "1" },
  },
  {
    name: "UTA_MessageSkip",
    status: true,
    description: "特定キーを押す事でメッセージをスキップできるようにします。",
    parameters: { "Skip Key": "shift", "Show Trace": "false" },
  },
  {
    name: "EraseGoldWindow",
    status: true,
    description: "ゴールド表示ウインドウを削除",
    parameters: {},
  },
  {
    name: "MessageWindowHidden",
    status: true,
    description: "メッセージウィンドウ一時消去プラグイン",
    parameters: {
      triggerButton: '["右クリック"]',
      linkPictureNumbers: "",
      disableSwitchId: "0",
    },
  },
  {
    name: "PhantomEvent",
    status: true,
    description: "ファントムイベントプラグイン",
    parameters: {
      invisibleDistance: "2",
      visibleSelfSwitch: "",
      visibleSwitch: "0",
      minimumOpacity: "0",
      distanceTriggerSelfSwitch: "",
      commandPrefix: "",
    },
  },
  {
    name: "MPI_AnimationOverPictures",
    status: true,
    description: "アニメーションを、ピクチャより前に表示します。",
    parameters: { 表示切替用スイッチ番号: "0" },
  },
  {
    name: "PictureCallCommon",
    status: true,
    description: "ピクチャのボタン化プラグイン",
    parameters: {
      透明色を考慮: "ON",
      ピクチャ番号の変数番号: "0",
      ポインタX座標の変数番号: "0",
      ポインタY座標の変数番号: "0",
      タッチ操作抑制: "OFF",
      戦闘中常にコモン実行: "OFF",
    },
  },
  {
    name: "MKR_PlayerMoveForbid",
    status: true,
    description: "(v1.0.5) プレイヤー移動禁止プラグイン",
    parameters: {
      Default_Move_Flag: "2",
      Default_Menu_Flag: "true",
      "Enter Flag": "false",
    },
  },
  {
    name: "CBR_imgFusion",
    status: true,
    description: "画像合成",
    parameters: {},
  },
  {
    name: "DTextPicture",
    status: true,
    description: "動的文字列ピクチャ生成プラグイン",
    parameters: {},
  },
  {
    name: "BB_CustomSaveWindow",
    status: true,
    description: "セーブウインドウ改造プラグイン",
    parameters: {
      OutsideFrameColor: "0",
      OutsideFrameOpacity: "0",
      InsideFrameColor: "0",
      InsideFrameOpacity: "0",
      MaxItem: "4",
      Item0: "6",
      Item0Length: "700",
      Item1title: "",
      Item1: "",
      Item2title: "",
      Item2: "0",
      Item3title: "",
      Item3: "0",
      Item4title: "",
      Item4: "0",
      Item5: "0",
      ItemValue1: "30",
      ItemValue2: "2",
      ItemValue3: "3",
      ItemValue4: "4",
      ItemValue1unit: "",
      ItemValue2unit: "",
      ItemValue3unit: "",
      ItemValue4unit: "",
      TitleFramelength1: "110",
      TitleFramelength2: "110",
      TitleFramelength3: "110",
      TitleFramelength4: "110",
      CharacterPositionY: "6",
      CharacterOpacity: "2",
      LevelPositionY: "23",
      LevelOnOff: "0",
    },
  },
  {
    name: "MoviePicture",
    status: true,
    description: "動画のピクチャ表示プラグイン",
    parameters: {
      動画音量種別: "none",
      終了時自動削除: "true",
      動画取得フォルダ: "",
      webm偽装拡張子: "",
      mp4偽装拡張子: "",
    },
  },
];
