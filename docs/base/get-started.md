---
outline: deep
---

# 5 分钟 快速上手

#### 第一步创建应用

![](/public/platform/1.jpg "应用中心")

#### 编辑应用界面一览

![](/public/platform/overview.png "编辑应用界面一览")

#### 页面组成

页面由三部分组成，导航栏(头)，主体(身子)，底部栏(脚)
![](/public/platform/phone.png "页面组成"){ width=400 }

##### 页面组成

页面，都是由很多小块组成的，比如：

一段文字 ✍️

一个按钮 ✅

一张图片 🖼️

这些小块，我们就叫它——组件。

##### 页面布局

最重要的就是了解，容器组件
![](/public/compoents/flex-menus.png "容器组件")
容器组件就像一个“万能的盒子”，里面可以放很多东西，比如图片、文字、按钮。可以很轻松地把这些内容排成一排、一列，或者自动换行。
就像把积木整整齐齐地摆好。

###### 示例 1

<div style="display: flex; gap: 20px;">
  <img src="/public/compoents/flex1.png" alt="图片" style="width: 350px;height: 80px;" loading="lazy" />
  <img src="/public/compoents/flex1-1.png" alt="图片" style="width: 350px; height: auto;" loading="lazy" />
</div>
