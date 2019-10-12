# network_mongdb
需要首先启动mongdb
在D:\database\mongodb-win32-x86_64-2012plus-4.2.0\bin 下运行
mongod --dbpath D:\database\mongodb-win32-x86_64-2012plus-4.2.0\data\db

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


花生壳：api：http://service.oray.com/question/2480.html
用户可直接通过路由器设置端口映射，由花生壳域名绑定动态IP地址，实现外网通过域名访问局域网内搭建的服务。
登录路由器：192.168.1.1 找到  转发规则--虚拟服务器

本地服务不能通过ip访问：
步骤1.将index.js中的host的值改为‘0.0.0.0’
步骤2.修改package.json中script下dev的值，在后面加入–host 0.0.0.0 也可以解决
