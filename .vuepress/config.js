const { sidebar } = require('./sidebar')
const { plugins } = require('./plugins')
const { nav } = require('./nav')
module.exports = {
	title: 'jayjay\'s blog',
	description: 'good good study, day day up',
	base: '/',
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	markdown: {
		lineNumbers: true, // 代码块显示行号
		extractHeaders: ['h2','h3']//右侧目录导航显示的层级,默认['h2','h3']
	},
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		logo: '/logo.png',
		author: 'jayjay',
		authorAvatar: '/avatar.png',
		lastUpdatedText: '',
		autoSetCategory: true,         // 自动设置分类
		subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		// series 为原 sidebar
		sidebar: sidebar,
		nav: nav,
		// 博客配置
		blogConfig: {
			//开启分类nav导航
			category: {
				location: 2,     // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认文案 “分类”
			},
			//开启标签nav导航
			tag: {
				location: 3,     // 在导航栏菜单中所占的位置，默认3
				text: '标签'      // 默认文案 “标签”
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
		startYear: '2022',
		//友情链接
		// friendLink: [
		// 	{
		// 		title: '午后南杂',
		// 		desc: 'Enjoy when you can, and endure when you must.',
		// 		email: '1156743527@qq.com',
		// 		link: 'https://www.recoluan.com'
		// 	},
		// 	{
		// 		title: 'vuepress-theme-reco',
		// 		desc: 'A simple and beautiful vuepress Blog & Doc theme.',
		// 		avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
		// 		link: 'https://vuepress-theme-reco.recoluan.com'
		// 	},
		// ],
		//评论
		valineConfig: {
			appId: 'NV4CrouQGO38orHsLqOvcJEq-gzGzoHsz',
			appKey: 'xAeSpWc67sRB1MKPR4vKxupg',
			placeholder: '请留下你的痕迹~~',
			verify: true, // 验证码服务
			//notify: true,
			recordIP: true,
			//hideComments: true // 隐藏评论
		},
	},
	//插件
	plugins: plugins,
	// debug: true,
}
