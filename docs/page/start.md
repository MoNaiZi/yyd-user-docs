---
outline: deep
---

# 什么是页面？

页面就是一个完整独立的界面，展示内容并提供交互。

- 类比成一本书的“某一页” 📖。
- 例：淘宝的“商品详情”，都是页面。

## 页面生命周期

每个页面都有生命周期，就像一个人从出生到离开的过程 👶➡️👋。

::: details 创建（onLoad） → 页面刚生成时，但是组件还没生成

👉 触发时机：页面刚刚被创建出来，但里面的组件还没有真正显示。

👉 主要作用：

可以在这里接收上一个页面传过来的参数（比如：从商品列表点进来，带了一个商品 ID）。

可以根据传入的数据，提前准备好本页面要用的内容。

💡 举个例子：
你在“商品列表”页面点击了某个“苹果手机”，跳到“商品详情”页面时，onLoad 就会收到这个 苹果手机的 ID，然后你就能在这里根据这个 ID 去请求详情数据。

:::

显示（onShow） → 页面显示时触发。

创建完（onReady） → 页面上所有的组件都生成完。

隐藏（onHide） → 页面被遮住时触发（去到别的页面）。

卸载（onUnload） → 页面关闭触发。

## 导航栏

页面顶部的栏，用来显示标题、返回页面等。

在不同端可能表现不一样

H5
![](/public/page/H5.png){ width=250 }

微信小程序，右上角会多一个胶囊按钮
![](/public/page/微信小程序下的导航栏.png){ width=250 }

### 自定义导航栏

默认导航栏满足不了需求，就可以使用自定义导航栏
![](/public/page/自定义导航栏示例.jpg){ width=250 }

1. 在页面设置，勾选自定义
   ![](/public/page/页面设置导航栏自定义.png){ width=250 }

2. 在 组件 1 -> 导航组件 -> 自定义导航栏，找到拖进页面中。
   ![](/public/page/自定义导航栏组件.png){ width=250 }

## TabBar 页面

底部的切换栏，用来快速在几个核心页面间切换。

例：微信底部的微信/通讯录/发现/我。

适合展示常用功能入口。

怎么添加？请查看<a href="/docs/docs/page/manage" target="_blank" rel="noopener noreferrer">页面管理</a>

::: tip 自定义底部栏
上面添加的方式是叫原生底部栏，还可以自定义底部栏添加方式：在 组件 1 -> 导航组件 -> 自定义底部栏，找到拖进页面中。

优点：好看

缺点：没有原生的性能好，差距很大，建议还是用原生。
:::

## 页面跳转

页面跳转主要有几种方式，每个适用的场景不一样

1. navigateTo

👉 保留当前页面，跳转到一个新页面。用户可以点返回回到原页面。

::: details 🔄 生命周期执行：

- 当前页：隐藏（onHide）
- 新页面：创建（onLoad） → 显示（onShow） → 创建完（onReady）
- 返回时：新页面 卸载（onUnload） → 原页面 显示（onShow）

:::

```js
//在起始页面跳转到 test 页面并传递参数
uni.navigateTo({
  url: "test?id=123&name=测试",
});
```

目标页面接收参数：

```js
onLoad(options) {
  console.log(options) // { id: "123", name: "测试" }
}
```

2. redirectTo

👉 关闭当前页面，跳转到新页面。不能返回。

::: details 🔄 生命周期执行：

- 当前页：卸载（onUnload）
- 新页面：创建（onLoad） → 显示（onShow） → 创建完（onReady）

:::

```js
uni.redirectTo({
  url: "/pages/login/login",
});
```

3. reLaunch

👉 关闭所有页面，重新打开一个页面。常用于 退出登录 → 回到首页。

::: details 🔄 生命周期执行：

- 当前页：卸载（onUnload）
- 新页面：创建（onLoad） → 显示（onShow） → 创建完（onReady）

:::

```js
uni.reLaunch({
  url: "/pages/index/index",
});
```

4. switchTab

👉 跳转到 tabBar 页面。

::: details 🔄 生命周期执行：

- 当前页：隐藏（onHide）
- 新 tab 页
  - 如果 第一次打开：创建（onLoad） → 显示（onShow） → 创建完（onReady）
  - 如果 已经打开过：显示（onShow）
- 返回到原 tab 页：原 tab 页执行 显示（onShow）

:::

```js
uni.switchTab({
  url: "/pages/home/home",
});
```

注意： 不能携带参数。

5. navigateBack

👉 返回上一个或多个页面。

::: details 🔄 生命周期执行：

- 当前页：卸载（onUnload）
- 新页面：显示（onShow）

:::

```js
// 默认返回上一个页面
uni.navigateBack();

// 还可以传入页面层数
uni.navigateBack({
  delta: 1, // 返回的层数，默认 1
});
```

注意： 不能携带参数。

---

📌 总结选择：

- 普通页面跳转 → navigateTo

- 不希望返回 → redirectTo

- 清空栈重新打开 → reLaunch

- 跳 tabBar 页 → switchTab

- 返回 → navigateBack

📖 生命周期总结口诀：

- 第一次进入新页面：一定有 创建（onLoad） → 显示（onShow） → 创建完（onReady）。

- 切换页面可返回：原页 onHide，新页走创建流程。

- 切换页面不可返回：原页直接 onUnload，新页走创建流程。

- 返回时：新页销毁（onUnload），上一个页面重新 onShow。

## 看完了还是不懂这么用？

不知道该用哪种页面跳转？生命周期记不住？ 👉 请查看<a href="/docs/docs/base/ai-helper" target="_blank" rel="noopener noreferrer"> 优易搭助手</a>。让 AI 来帮你。

::: tip 建议
还是先要了解一下生命周期，页面跳转，理解原理，才能真正走得更远。
:::
