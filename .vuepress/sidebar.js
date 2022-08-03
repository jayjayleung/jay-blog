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
	
  }

  
module.exports = {
	sidebar
}