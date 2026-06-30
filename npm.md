


# 将 Vite 项目部署到 GitHub Pages
你现在项目已经能本地跑起来了。接下来可以按这几个步骤部署到 GitHub Pages。


## 关联GitHub仓库并提交代码

在项目目录执行：

```
cd c:\Users\hexio\Documents\Three.js  // 在终端里进入你的项目根目录
git status //  查看当前 Git 状态
git init
git add index.html main.js  // 只暂存需要的两个文件
git commit -m "Add only index.html and main.js" // 提交
git push origin main  // 推送到远程仓库
```



## 安装部署工具 gh-pages

运行：
```
npm install --save-dev gh-pages
```

然后在 package.json 中添加两个脚本：

```
{
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 配置 vite.config.js

在项目根目录新建 vite.config.js：

```
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/repository_name/'
});
```




## 部署到 GitHub Pages

运行
```
npm run deploy
```
此命令会：

先执行 `npm run build`
然后把 `dist` 文件夹发布到 `gh-pages` 分支



## 手机访问

部署完成后，用手机打开：

https://hexiongwu1995.github.io/repository-name/


## 注意点
你当前 package.json 还没有 dev 脚本，没问题，部署只需要 build 和 deploy
index.html 里使用的 main.js 在打包后会由 Vite 处理
如果你后续修改了仓库名，vite.config.js 里的 base 也要改成新的仓库名
如果你要，我也可以继续帮你写出完整的 vite.config.js 和 package.json 该怎么改。