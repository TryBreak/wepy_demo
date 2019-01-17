# 小程序应用框架 wepy 的测试和开发模板,内涵测试 demo

## 当前 demo 运行环境

node@10.15.0
npm@6.5.0
wepy@1.7.3

## 使用方法

```bash shell
#安装 wepy-cli 工具
npm install wepy-cli -g

#安装依赖
npm  install

#开启实时编译并保持命令行运行
npm run dev
```

打开`微信开发者工具`-->`小程序`-->`新增`

> 注: `项目目录先择本文件根目录即可`

`project.config.json` 文件可修改 AppID 为自己的 ID,项目名称和描述

详细使用方法参见:
[wepy 官方文档](https://tencent.github.io/wepy/document.html)
`创建与使用`部分

## 编辑器代码高亮配置规则

参见
[wepy 官方文档](https://tencent.github.io/wepy/document.html)
`代码高亮`部分

## 注意事项

参见
[wepy 官方文档](https://tencent.github.io/wepy/document.html)
`代码规范` 5,6 部分

## 开发时建议

- 如果遇到编译不成功修改无反应引入组件没效果等情况,请关掉 `cli的实时编译` 重新启动命令

## 小程序开发者工具建议

开发工具界面右上角详情

- 调用基础库: 2.5.0

- ES6 转 ES5 : false
- 上传代码时样式自动补全 : false
- 上传代码时自动压缩混淆 : false
- 上传时进行代码保护 : false
- 使用 npm 模块 : false
- 自动运行体验评分 : false
- 启用自定义处理命令 : false

- 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 : true

## 标准

- 页面命名规则为小驼峰命名,
- 页面命名必须与页面输出命名一致,
- 所有标签必须闭合并带结尾 如 \<br />

vscode 需增加设置项 "vetur.format.defaultFormatter.html": "js-beautify-html"
