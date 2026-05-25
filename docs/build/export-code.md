---
outline: deep
---

# 导出源码打包

### 第一步 在优易搭先配置好

::: warning 注意

这里以微信小程序作为示例，没看过[上线小程序示例](/docs/build/pack)，请先去阅读。

:::

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

**然后就可以导出源码**

### 第二步使用 HBuilderX 导入项目打包

::: tip
没有 HBuilderX 的先下载安装。[HBuilderX 下载](https://www.dcloud.io/hbuilderx.html)
:::
![](/public/export-code/importhbuildx.png)

#### 项目导入进来后

![](/public/export-code/importhbuildx2.png)

#### 点击选中，查看是否含如下目录及文件

![](/public/export-code/importhbuildx3.png)

#### 在 HBuilderX 的上方找到发行，这里有多种打包方式，可以打包成 H5，小程序，APP

![](/public/export-code/importhbuildx4.png){ width=300 }

#### 这里以打包 H5 为例：点击 网站-PC Web 或手机 H5，弹出以下框点击发行打包

![](/public/export-code/no-appid-tips.png){ width=400 }

<details>
    <summary>（点击展开）如果出现 <span style="color: red;">项目 AppID 不能为空，请在该项目下的 manifest.json 中重新获取</span></summary>

::: warning 来到 manifest.json 点重新获取

![](/public/export-code/no-appid.png)

**获取成功之后我们可以接着上面的步骤继续打包了**

---

也可以把这个 AppID 复制到优易搭我们的项目当中。要不然每次导出都要获取 AppID。
以下是把 AppID 复制到优易搭项目的流程。

1. 点击源码视图
   ![](/public/export-code/click-source-code.png){ width=200 }
2. 复制 appid
   ![](/public/export-code/copy-appid.png)
3. 来到优易搭，点击应用文件
   ![](/public/export-code/app-file.png)
4. 找到 应用配置把，appid 复制进去
   ![](/public/export-code/manifest.png)
5. 结束。
:::
</details>

### 第三步 打包成功

![](/public/export-code/build-success.png)

### 接下来的流程请参考[上线小程序示例](/docs/build/pack)
