import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'jayjay\'s blog',
  description: 'good good study, day day up',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'jayjay',
	authorAvatar: '/avatar.png',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
	autoSetCategory: true,         // 自动设置分类
    // series 为原 sidebar
    series: {
      '/docs/hexo/': [
        {
          text: 'hexo',
          children: ['hexoBuildBlog', 'hexoScript']
        }
      ],
	  '/blogs/linux/docker/': [
			{
			  text: 'docker',
			  children: [
				  {text:'docker安装(centos7)',link:'docker-install'}, 
				  {text:'docker安装mysql',link:'mysql-install'} ,
				  {text:'docker安装redis',link:'redis-install'} ,
				  {text:'docker安装nginx',link:'nginx-install'}
			  ]
			},
		],
		'/blogs/linux/ftp/': [
			{
			  text: 'ftp',
			  children: [
				{text:'centos7安装ftp',link:'ftp-install'}
			  ]
			},
		],
		'/blogs/linux/jenkins/': [
			{
			  text: 'jenkins',
			  children: [
				  {text:'centos7安装ftp',link:'jenkins'}, 
				  {text:'GitLab代码托管服务器安装', link:'/blogs/linux/GitLab-install'}
			  ]
			}
		],
      
    },
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/linux/1/' },
      { text: 'Tags', link: '/tags/docker/1/' },
      { text: 'Docs',
        children: [
          { text: 'hexo', link: '/docs/hexo/hexoBuildBlog' },
          {
			  text: 'linux', 
			  children: [
				  { text: 'docker', link: '/blogs/linux/docker/docker-install' },
				  { text: 'ftp', link: '/blogs/linux/ftp/ftp-install' },
				  { text: 'jenkins', link: '/blogs/linux/jenkins/jenkins' }
				]
		  }
        ]
      },
	  { text: '掘金', link: 'https://juejin.cn/user/1583723129876158' }, // 外部链接
      // 下拉列表
      {
        text: 'Git',
        children: [
          { text: 'GitHub', link: 'https://github.com/jayjayleung' },
          { text: 'Gitee', link: 'https://gitee.com/jayjay-coder' },
        ]
      } 
    ],
	/*
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'QQ 群',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'GitHub',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '打赏',
              link: '/docs/others/donate.html'
            }
          ]
        }
      ],
    },*/
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
