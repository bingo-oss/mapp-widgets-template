# mapp-widgets-template

> [Vue-cli](https://github.com/vuejs/vue-cli)模板，用来作为应用工厂部件库开发的模板工程

> 支持Vue版本2.5.3 

## 使用方式

需要npm3+支持

#### 运行步骤

``` bash
$ npm install -g vue-cli
$ vue init bingo-oss/mapp-widgets-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

默认使用8080端口，在文件 `/config/index.js`配置，可以自行修改

#### 部件库入口

模板工程部件入口是lib.js，包含一个简单的hello部件，你可以修改这里添加更多的部件:  

*/src/lib.js*
```javascript
import hello from './widgets/hello'
import './styles/lib.scss'
//这里定义所有暴漏出来的部件，部件名就是部件id，在Vue中将通过此id使用组件
//例如hello组件使用<meta-widget-hello></meta-widget-hello>
const test = {
    'meta-widget-hello':hello
}
export default test

```

#### 测试入口

作为一个单页应用，运行你的部件

*/src/docs.js*
```javascript
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
``` 

#### build命令

``` bash
$ npm build        # This builds both your library and your docs/demo SPA.
$ npm build:lib    # This builds just your library.
$ npm build:docs   # This builds just your docs/demo SPA.
```

运行完命令后 */dist* 目录将包含如下内容:  

```
/dist
   /docs
      /css
      /js
   /lib
      my-project.js.map
      my-project.js
      ...
```  

#### 在应用工程主工程中引入你的部件库

放置my-project.js到主工程的widgets目录，注册部件到平台

## What's Included
模板工程从[vue-library-template](https://github.com/prograhammer/vue-library-template)改造而来，下边是所有运行指令的说明，从那边复制过来的

- `prepublishOnly`: Npm prepublish hook so you can run `npm publish` and both your library and docs are built first.

- `npm run dev`: Shortcut to run both dev:lib and dev:docs in parallel using [npm-run-all](https://github.com/mysticatea/npm-run-all).

- `npm run dev:lib`: Runs webpack watch mode on your library so file changes are built and re-written to disk automatically (useful for [npm link](https://docs.npmjs.com/cli/link) situations).

- `npm run dev:docs`: Runs both the development server for your docs/demo site.

- `npm run build`: Shortcut to run both build:lib and build:docs.

- `npm run build:lib`: Production ready build of your library as an ES6 module (via UMD), ready to import into another project via npm.

- `npm run build:docs`: Production ready build of your docs site for your library. Put this build online so you can demo your library to the world and provide documentation. 
