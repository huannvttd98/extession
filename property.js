const properties = {
  affiliate: {
    /** 最新設定の取得間隔[分] (前回取得から設定分数が経過するまでは最新設定は取得しない) */
    fetchIntervalMinutes: 60,
  },
  common: {
    // 広告設定
    ads: {
      // 下のテキスト、リンク先
      text: "フリマアシスト広告",
      link: "",
      // 公式LINE登録を促すバナー
      banner0: {
        link: "https://furima-assist.com/banner/banner0.txt",
        img: "https://furima-assist.com/banner/banner0.png",
      },
      // フリマアシスト広告
      banner1: {
        link: "https://furima-assist.com/banner/banner1.txt",
        img: "https://furima-assist.com/banner/banner1.png",
      },
    },
  },
  merkari: {},
  rakuma: {},
}
