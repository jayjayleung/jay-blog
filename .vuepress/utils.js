const fs = require('fs');
const path = require('path');
const defaultRootPath = '/docs';
const getFile = (prefixPath, rootPath = defaultRootPath) => {
  return fs.readdirSync(path.join(process.cwd(), `${rootPath}${prefixPath}`))
    .filter(item => item.lastIndexOf('.md') != -1)
    .map(item => {
      return { title :`${item.replace('.md', '')}`, path : `${item.replace('.md', '')}`};
    })
}
const getFile2DelPre = (preIndex,prefixPath, rootPath = defaultRootPath) => {
  return fs.readdirSync(path.join(process.cwd(), `${rootPath}${prefixPath}`))
    .filter(item => item.lastIndexOf('.md') != -1)
    .sort((a, b) => parseInt(a.replace(/[^0-9]/, '')) - parseInt(b.replace(/[^0-9]/, '')))
    .map(item => {
      // console.log(item);
      // const title = `${item.substring(2).replace('.md', '')}`;
      const title = `${item.replace(/[0-9]+\./,'').replace('.md', '')}`;
      // const title = `${item.replace('.md', '')}`;
      const path =`${item.replace('.md', '')}`;
      return { title :title, path : path};
    })
}

/**生成侧边栏信息 */
const createSideBarConfig = (title, prefixPath, rootpath = defaultRootPath,collapsable = false) => {
  return {
    title,
    collapsable,
    children: getFile(prefixPath,rootpath)
  }
}

const createSideBarConfig2Children = (prefixPath,rootpath = defaultRootPath) => {
  return getFile(prefixPath,rootpath)
}
const delPrefixSiderBarConfig2Children = (preIndex,prefixPath,rootpath = defaultRootPath) => {
  return getFile2DelPre(preIndex,prefixPath,rootpath)
}
module.exports = {
  createSideBarConfig,
  createSideBarConfig2Children,
  delPrefixSiderBarConfig2Children
}