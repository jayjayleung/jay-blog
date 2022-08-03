const plugins = [
    // [
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    // 	theme: ["z16"],
    // 	clean: false,
    // 	modelStyle: {
    // 		right: '90px',
    // 		bottom: '-20px',
    // 		opacity: '0.9'
    // 	},
    // 	message: {
    // 		welcome: '欢迎来到 JayJay\'s Blog',
    // 		home: '心里的花，我想要带你回家。',
    // 		theme: '好吧，希望你能喜欢我的其他小伙伴。',
    // 		close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    // 	  }
    //   }
    // ],
    ['vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          // model: 'haru/02',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }],
      ["vuepress-plugin-nuggets-style-copy", {
          selector: ['div[class*="language-"] pre'],
          copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
          tip: {
            content: "复制成功!"
          }
      }],
      ['@vuepress-reco/back-to-top',false],
       // 悬挂小猫返回顶部
      ['go-top'],
      /*
      ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
        toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
        duration: 300, // prompt message display time
      }]*/
];

module.exports = {
    plugins
}