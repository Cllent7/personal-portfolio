# 用 AI 搭建作品集网站的提示词工作流

> 适用于 Claude Code、Codex、Cursor 等 AI 编程工具。按顺序发给 AI，每一步确认结果后再进行下一步。

---

## 第 1 步：定方向（第一条消息）

发给 AI：

```
我要搭建一个个人作品集网站，先别写代码，帮我确认方案：

- 我的身份：Unity 开发工程师
- 部署方式：GitHub Pages（免费静态托管）
- 技术栈：纯 HTML + CSS + JS，不要用 React/Vite/Vue，不要 npm install
- 需要手机和电脑都能访问
- 能生成二维码给面试官扫码打开

你先回答我：
1. 这个方案可行吗？
2. 项目结构大概什么样？
3. 部署流程是什么？
```

> **AI 确认没问题后，进入下一步。**

---

## 第 2 步：搭页面骨架

```
现在开始搭建。要求：

1. 创建一个 index.html，包含三个页面区域（用 display 切换，不要多个 HTML）：
   - 首页：标题"XXX 的作品集"、副标题"Gameplay / VR / AI Interaction / Simulation"、作品卡片横排展示
   - 详情页：点击卡片后进入，展示项目完整信息
   - 个人介绍页：个人照片区域、技能标签、联系方式

2. CSS 设计方向：
   - 暗色背景 (#06080d)
   - 主色调用冷青色 (#62e6d3) 和紫色 (#9e7bff)
   - 细线边框 + 玻璃质感半透明面板 + 大留白
   - 不要花里胡哨，要克制、高级、科技感
   - 所有颜色用 CSS 变量统一管理

3. JS 要求：
   - 所有项目数据放在一个数组里
   - 用 JS 动态渲染，不要手写每个卡片的 HTML
   - 每个项目包含：标题、类型、角色、摘要、技术标签、封面图、演示图集、视频地址、GitHub 链接

4. 重要规则：
   - 所有资源路径用 ./ 开头（如 ./styles.css），不要用 / 开头
   - 不要引入任何第三方库
   - 不要自动播放视频

先做能跑的基础版，我后面会逐步优化。
```

> **AI 生成 index.html、styles.css、script.js 后，本地测试通过。进入下一步。**

---

## 第 3 步：加背景氛围

```
现在给首页加背景氛围，不要用图片，纯 CSS 实现：

1. 加一个 Canvas 粒子背景：
   - 暗色底色上有缓慢漂移的小光点
   - 不同颜色（青、紫、琥珀）
   - 粒子之间画半透明连接线
   - 还有几条横向渐变光带缓慢移动
   - 用 requestAnimationFrame

2. CSS 背景层：
   - body 上加几个径向渐变光斑
   - 固定的网格噪点纹理（用 repeating-linear-gradient）
   - 旋转的冷暖光场（用 conic-gradient + animation）

3. 底部加一个缓慢旋转的大光晕

所有背景效果放在固定定位的伪元素或 Canvas 上，不影响内容交互。
```

> **AI 加完背景后，PC 端效果应该比较丰富。进入下一步。**

---

## 第 4 步：做卡片轮播

```
首页的作品卡片改成自动轮播：

1. 卡片排成一横排，用 translate3d 控制位置
2. 自动向左缓慢移动，requestAnimationFrame 驱动
3. 把项目数组复制一份接在后面，过半时跳回，形成无缝循环
4. 鼠标悬停时暂停动画
5. 支持鼠标/手指拖动：
   - 用 Pointer Events（pointerdown/pointermove/pointerup）
   - pointerdown 时 setPointerCapture
   - 移动距离小于 8px 视为点击，打开项目详情
   - 移动距离大于 8px 视为拖动
6. 卡片 hover 时放大、上浮、边框变亮
7. 核心项目卡片加发光边框和光晕标记
8. 视口两侧加渐变遮罩（mask-image），让卡片从边缘淡入
```

> **此时首页轮播应该可以自动滚动、拖动、点击。进入下一步。**

---

## 第 5 步：做项目详情页

```
点击卡片进入详情页。详情页包含：

1. 左侧：大图封面 + 扫描线效果 + 角落装饰标记
2. 右侧：项目标题、摘要、元信息标签、技术标签、GitHub 链接
3. 下方分两栏：
   - 左栏：项目简介、技术亮点列表
   - 右栏：技术栈网格（2x2 小卡片）+ 系统拆解
4. 最下方横跨全宽：视频播放器 + 演示图集轮播
5. 演示图集也是无限循环自动滚动，支持悬停暂停和拖动
6. 左上角有"返回作品集"按钮，按 Escape 也能返回
7. 切换页面时加一个圆形扩散的过渡动画
```

> **详情页功能完整后，进入下一步。**

---

## 第 6 步：处理视频

```
视频部分做这些处理：

1. 每个项目有两个视频字段：
   - video：公网 OSS/CDN 地址，部署后使用
   - videoFallback：本地 assets/videos/ 路径，仅本地预览用
   - 页面优先使用 video

2. 视频加载失败时不要显示浏览器默认报错，替换成：
   - 友好提示："视频暂时无法加载，可以尝试刷新页面或打开项目仓库查看演示说明。"
   - 如果配置了 video 外链，加一个"打开视频外链"按钮

3. 退出项目详情时，暂停视频并释放资源（pause + removeAttribute('src') + load）
4. 视频属性：controls、playsinline、preload="none"，不自动播放
```

> **视频功能完善。进入下一步。**

---

## 第 7 步：手机端适配

```
手机端适配和性能优化：

1. 响应式布局：
   - 小于 680px 时，双栏布局改为单栏堆叠
   - 卡片尺寸缩小
   - 详情页网格从 2 列改为 1 列

2. 手机端性能优化（很重要）：
   - Canvas 粒子动画在手机上直接关闭（window.innerWidth < 768），改用纯 CSS 渐变替代背景
   - backdrop-filter: blur() 在手机上全部关掉
   - 卡片的大阴影模糊半径缩减一半（96px → 48px）
   - mask-image 羽化边缘简化（8% → 3%）

3. 触摸交互：
   - 卡片拖动不要加 passive listener
   - 不要 preventDefault
   - setPointerCapture 正常使用即可
```

> **手机端流畅可用。进入下一步。**

---

## 第 8 步：部署

```
准备部署到 GitHub Pages：

1. 确认 .gitignore 包含：
   assets/videos/
   *.mp4
   *.mov
   *.webm
   .DS_Store
   Thumbs.db

2. 根目录放一个空的 .nojekyll 文件

3. 写 README.md，包含：
   - 项目简介
   - 在线访问地址 https://用户名.github.io/仓库名/
   - 本地预览方式：python -m http.server 8094 --bind 127.0.0.1
   - GitHub Pages 部署步骤：Settings → Pages → Deploy from branch → main → /root
   - 更新方式：git add/commit/push

4. 确认 index.html 里所有 CSS/JS/图片路径都是 ./ 开头

5. 提醒我：推送到 GitHub 后，去仓库 Settings → Pages 开启部署
```

> **部署完成后，拿到 `https://用户名.github.io/仓库名/` 地址。进入下一步。**

---

## 第 9 步：生成二维码

```
帮我写一个 PowerShell 脚本 make-public-qr.ps1：

- 接收一个 -Url 参数
- 调用 qrserver API 生成 512x512 二维码图片
- 输出 public-qr.png 和 public-qr.html（二维码预览页）
- public-qr.png 和 public-qr.html 加入 .gitignore

运行方式：
.\make-public-qr.ps1 -Url "https://用户名.github.io/仓库名/"
```

> **拿到二维码，放进简历。整个项目完成。**

---

## 补充：常见需要微调的地方

这些是项目做完后可能会跟 AI 说的：

```
"卡片悬停时展开得太大了，缩小一点"
"手机端滑动还是会卡，帮我把 Canvas 在手机上彻底关掉"
"我滑动不了了，你是不是加了 passive listener，帮我检查"
"返回首页后视频还在播放，修复一下"
"帮我把所有 Cllent7 改成 cllent"
"README 里部署说明从 Vercel 改成 GitHub Pages"
```

---

## 核心原则（跟 AI 反复强调的）

跟 AI 说这 5 句话，可以避免大部分返工：

1. **"不要引入任何需要 npm install 的东西"**
2. **"所有文件路径用 ./ 开头，不要用 /"**
3. **"手机端的 backdrop-filter 和 Canvas 粒子直接关掉"**
4. **"Pointer Events 不要加 passive，不要 preventDefault"**
5. **"推送即部署，不需要构建步骤"**
