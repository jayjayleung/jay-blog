module.exports ={
  title: 'jayjay\'s blog',
  description: 'good good study, day day up',
  base:'/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  theme:'reco',
  themeConfig: {
	type: 'blog',
    logo: '/logo.png',
    author: 'jayjay',
	authorAvatar: '/avatar.png',
    lastUpdatedText: '',
	autoSetCategory: true,         // 自动设置分类
	subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // series 为原 sidebar
    sidebar: {
      '/docs/hexo/': [
        {
          title: 'hexo',
          children: [
		   {title:'hexo搭建个人博客',path:'hexoBuildBlog'},
		   {title:'hexo常用命令',path:'hexoScript'},
		  ]
        }
      ],
	  '/blogs/linux/docker/': [
			{
			  title: 'docker',
			  path: '/',
			  collapsable: false, // 不折叠
			  children: [
				  {title:'docker安装(centos7)',path:'docker-install'}, 
				  {title:'docker安装mysql',path:'mysql-install'} ,
				  {title:'docker安装redis',path:'redis-install'} ,
				  {title:'docker安装nginx',path:'nginx-install'}
			  ]
			},
		],
		'/blogs/linux/ftp/': [
			{
			  title: 'ftp',
			  path: '/',
			  collapsable: false, // 不折叠
			  children: [
				{title:'centos7安装ftp',link:'ftp-install'}
			  ]
			},
		],
		'/blogs/linux/jenkins/': [
			{
			  title: 'jenkins',
			  path: '/',
			  collapsable: false, // 不折叠
			  children: [
				  {title:'centos7安装jenkins并部署spring boot项目',path:'jenkins'}
			  ]
			}
		],
      
    },
    nav:
    [
      { text: 'Home', link: '/' },
      //{ text: 'Categories', link: '/categories/linux/1/' },
      //{ text: 'Tags', link: '/tags/docker/1/' },
      { text: 'Docs',
        items: [
          { text: 'hexo', link: '/docs/hexo/hexoBuildBlog' },
          {
			  text: 'linux', 
			  items: [
				  { text: 'docker', link: '/blogs/linux/docker/docker-install' },
				  { text: 'ftp', link: '/blogs/linux/ftp/ftp-install' },
				  { text: 'jenkins', link: '/blogs/linux/jenkins/jenkins' },
				  { text: 'GitLab', link: '/blogs/linux/GitLab-install' }
				]
		  }
        ]
      },
	  { text: '掘金', link: 'https://juejin.cn/user/1583723129876158' }, // 外部链接
      // 下拉列表
      {
        text: 'Git',
        items: [
          { text: 'GitHub', link: 'https://github.com/jayjayleung' },
          { text: 'Gitee', link: 'https://gitee.com/jayjay-coder' },
        ]
      } 
    ],
	 // 博客配置
	blogConfig: {
	  category: {
		location: 2,     // 在导航栏菜单中所占的位置，默认2
		text: 'Category' // 默认文案 “分类”
	  },
	  tag: {
		location: 3,     // 在导航栏菜单中所占的位置，默认3
		text: 'Tag'      // 默认文案 “标签”
	  },
	  socialLinks: [     // 信息栏展示社交信息
		{ icon: 'reco-github', link: 'https://github.com/jayjayleung' },
		{ icon: 'reco-mayun', link: 'https://gitee.com/jayjay-coder' },
		{ icon: 'reco-juejin', link: 'https://juejin.cn/user/1583723129876158' },
	  ]
	},
	// 备案
    record: '粤ICP备20012943号',
    recordLink: 'https://beian.miit.gov.cn/',
    //cyberSecurityRecord: '公安部备案文案',
    //cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2022'
  },
  plugins: [
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
		  /*
		  ["vuepress-plugin-nuggets-style-copy", {
			  copyText: "复制代码",
			  tip: {
				  content: "复制成功"
			  }
		  }]*/
  ],
  // debug: true,
}
