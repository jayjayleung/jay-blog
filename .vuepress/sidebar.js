const { createSideBarConfig,createSideBarConfig2Children } = require('./utils')


const BLOGS = '/blogs'
const DOCS = '/docs'
//go
const GO_PATH='/go/'

const BLOGS_GO_PATH=BLOGS+GO_PATH

console.log(createSideBarConfig2Children(GO_PATH,BLOGS))
// console.log(createSideBarConfig("GO学习笔记",GO_PATH,BLOGS))

const sidebar = {
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
	  '/blogs/linux/other/': [
		  {
			title: 'other',
			path: '/',
			collapsable: false, // 不折叠
			children: [
				{title:'GitLab代码托管服务器安装',path:'GitLab-install'},
				{title:'centos7 挂载硬盘',path:'linux-disk-install'},
			]
		  }
	  ],
	  '/blogs/go/': [
		  {
			title: 'Go学习',
			path: '/',
			collapsable: false, // 不折叠
			// children: createSideBarConfig2Children(GO_PATH,BLOGS)
			children: [
				{title:'Go环境安装',path:'Go环境安装'},
				{title:'第一个Go程序 Hello Word',path:'第一个Go程序 Hello Word'},
				{title:'Go语言的基础语法规范',path:'Go语言的基础语法规范'},
			]
		  }
	  ],
	
  }


  
module.exports = {
	sidebar
}