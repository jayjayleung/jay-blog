const nav = [
  { text: 'Home', link: '/' },
  { text: '归档', link: '/timeline/', icon: 'reco-date' },//时间轴
  { text: '文章', link: '/categories/linux/', icon: 'reco-document' },
  //   { text: 'Docs',
  //     items: [
  //       { text: 'hexo', link: '/docs/hexo/hexoBuildBlog' },
  //       {
  // 		  text: 'linux', 
  // 		  items: [
  // 			  { text: 'docker', link: '/blogs/linux/docker/docker-install' },
  // 			  { text: 'ftp', link: '/blogs/linux/ftp/ftp-install' },
  // 			  { text: 'jenkins', link: '/blogs/linux/jenkins/jenkins' },
  // 			  { text: 'GitLab', link: '/blogs/linux/GitLab-install' }
  // 			]
  // 	  }
  //     ]
  //   },
  { text: '掘金', link: 'https://juejin.cn/user/1583723129876158', icon: 'reco-juejin' }, // 外部链接
  // 下拉列表
  {
    text: 'Git',
    icon: 'reco-github',
    items: [
      { text: 'GitHub', link: 'https://github.com/jayjayleung' },
      { text: 'Gitee', link: 'https://gitee.com/jayjay-coder' },
    ]
  }
]

module.exports = {
	nav
}