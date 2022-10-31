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

module.exports = {
  createSideBarConfig,
  createSideBarConfig2Children
}