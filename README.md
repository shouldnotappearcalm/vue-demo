一:完成一个简单的vue人员管理demo
1.项目来源网址 <a href="https://www.jianshu.com/p/5d9b341d650f">项目demo简书地址</a>

安装vue-cli

先安装node和npm 
1.全局安装vue-cli

```
npm install --global vue-cli 
```

2.由于国内npm较慢,选择安装ali的,以后就是用cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org 
```

3.新增一个空项目后,使用vue-cli进行初始化

```
vue init webpack demo01(项目名) 
```

4.进入当前项目并对项目的依赖进行初始化
```
cd demo01
npm install

剩下的东西就根据自己的需求进行yes 和 no的选择
```

5.运行测试的首页
```
npm run dev
```

