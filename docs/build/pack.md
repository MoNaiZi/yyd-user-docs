---
outline: deep
---

# 打包应用

::: warning 注意

- 客户端支持直接打包成 H5，小程序。
- 要想打包成 Android、iOS 请[导出源码](/docs/build/export-code)自行打包
- 使用网页只能[导出源码](/docs/build/export-code)自行打包。
  :::

## 以打包发布微信小程序 (其它平台小程序也是差不多的流程)

#### 1. 注册对应平台小程序账号

- 微信：[去微信公众平台 https://mp.weixin.qq.com/cgi-bin/loginpage](https://mp.weixin.qq.com/) 申请小程序，获取**AppID**
  ![](/public/build/拿AppId.png){ width=600 }

#### 2. 微信公众平台配置

- 1. 微信公众平台 → 管理 → 开发管理 → 服务器域名 → 修改

  ![](/public/build/配置服务器域名1.png){ width=700 }

- 2. 然后根据以下图片中添加：`https://cdn.youyida.work`

  ![](/public/build/配置服务器域名2.png){ width=700 }

#### 3. 优易搭平台打包

现在回到优易搭

- 1. 找到应用文件
     ![](/public/build/找到应用文件功能png.png){ width=400 }

- 2. 应用文件中填入小程序 ID (AppID)
     ![](/public/build/应用文件中填入小程序ID.png){ width=400 }

<details>
    <summary>（点击展开）配置说明</summary>

这里简单说明一下，更多配置可以直接把配置代码复制给豆包帮你解答

| 配置名      | 对应平台        |
| ----------- | --------------- |
| mp-weixin   | 微信小程序      |
| mp-alipay   | 支付宝小程序    |
| mp-baidu    | 百度小程序      |
| mp-toutiao  | 抖音/头条小程序 |
| mp-lark     | 飞书小程序      |
| mp-qq       | QQ 小程序       |
| mp-kuaishou | 快手小程序      |
| mp-xhs      | 小红书小程序    |
| mp-jd       | 京东小程序      |

</details>

**这里已客户端为例子**，如果是网页版只能[导出源码](/docs/build/export-code)自行打包。

**先自己在电脑上新建一个空的文件夹** → 选择导出文件夹 → 生成微信小程序

![](/public/build/选择导出文件夹.png){ width=400 }

生成了微信小程序代码 (打包完了)

![](/public/build/打包完之后.png){ width=400 }

#### 4. 用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)打开

::: tip 注意

这一步每个平台的工具都不一样，如果是支付宝就要下载：支付宝小程序开发者工具。不懂用什么工具可以找豆包这样提问：`开发了支付宝小程序，现在要发布用什么工具？`
:::

- 1. 微信开发者工具导入刚刚打包的
     ![](/public/build/微信开发者工具导入.png){ width=500 }
- 2. 导入之后，记得要检查 APPID 对不对。没问题就点 **创建**
     ![](/public/build/选择导入之后.png){ width=500 }
- 3. 上传 `这里上传其实是提交给微信平台审核，并不是直接发布到微信上了`
     ![](/public/build/上传小程序.png){ width=500 }

#### 5. 完结

后续微信平台审核之后会发微信通知，然后再去微信公众平台正式上线
