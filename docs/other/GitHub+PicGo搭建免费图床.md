---
title: GitHub+PicGo搭建免费图床
date: 2022-11-04
tags: 
 - other
categories: 
 - other
contact: other


---



# 前言

大家平时写文章都会用到图片，要粘贴图片，图片只能放在本地，很难维护显示，买个服务器存放图片开销又大，所以这里就介绍一种免费的图床，就是使用`GitHub`的仓库来当图床，缺点就是速度比较慢，但是有`cdn`加速，所以速度还是可以的。

## 创建仓库

>  账号注册那些我就不说了，没有的话注册一个就行。

首先登录`GitHub`,然后新建一个仓库，名字描述那些看个人喜好来

![image-20221104162449637](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104162449.png)

创建完就是这样了，这个仓库就是图床的本体，也就是存放图片的地方

![image-20221104162830079](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104162830.png)

## 创建Token

上面已经创建好仓库，这个时候就可以用了，但是总不能每次都打开这个仓库来手动上传图片，所以就需要授权给第三方软件，让第三方软件来帮我完成这个操作，授权的话就需要在`GitHub`创建一个`Token`提供给第三方软件访问你仓库的权限。



1. 在头像那里点击进入`setting`

![image-20221104163315549](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104163315.png)

2. 在左侧菜单中找到`Developer settings`进去

![image-20221104163539970](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104163540.png)

3. 选择`Personal access tokens\Tokens (classic)`

   ![image-20221104163854432](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104163854.png)

然后点击`Generate new token `创建，勾上`repo`，过期时间选择`No expiration`然后点击创建，之后会在页面上看到`token`，我们复制出来备用。

![image-20221104164502455](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104164502.png)

>  一定要先复制出来，不然下次进来就看不到，得重置`token`才能看到了

## PicGO配置

图片上传工具，这里选择[PicGo](https://github.com/Molunerfinn/PicGo/releases)

打开`PicGo`,在`图床设置`填上配置信息

![image-20221104165003271](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104165003.png)

1. 第一个是`用户名/仓库名`

2. 第二个是`分支名`，一般默认设置为master

3. 第三个是`Token`，就是刚刚拿到的密钥

4. 指定存储路径：[文件名]/（上传后会相应的在GitHub创建文件用来保存图片）

5. 设定自定义域名：https://raw.githubusercontent.com/[用户名]/[仓库名]/[分支名]

   ps: 这个速度比较慢，建议换成`cdn`链接: https://cdn.jsdelivr.net/gh/[用户名]/[仓库名]@[分支名]

6. 点击“确定”，并设置为“默认图床”

然后找到 `PicGo` 设置，打开里边的 **时间戳重命名**，这样可以避免图床在上传文件时，由于文件名相同造成的错误。

![image-20221104165657039](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104165657.png)

然后回到上传区上传一张图片，测试能否上传，如果上传成功会有通知

![image-20221104165835992](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104165836.png)



## Typora配置

部分编辑器会提供粘贴图片上传并转换url得，比如`Typora`



在`偏好设置(文件->偏好设置)`在`图像`，选择插入图片时上传图片，然后配置`PicGo`的安装路径

![image-20221104170414032](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104170414.png)

然后点击`验证图片上传选项`,没报错就是配置好了

![image-20221104170453177](https://cdn.jsdelivr.net/gh/jayjayleung/jayjayImages@main/images/20221104170453.png)

配置好后，之后粘贴图片到文章中时就会自动上传到`GitHub图床`中了。



> Gitee的配置基本相同，PicGo要装个Gitee图床插件，Gitee虽然速度快，但是Gitee有空间大小限制，请自行选择