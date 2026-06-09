# 媒体替换与部署说明

## 1. 你的素材目录

当前项目使用这两个目录：

```text
assets/images/
assets/videos/
```

你这次已经放进去的文件我已经接到页面里了。

## 2. 当前媒体映射

### 万象回廊：元素

- 卡片封面：`assets/images/万象回廊：元素封面.png`
- 详情演示图：
  - `assets/images/万象回廊：元素游戏演示.png`
  - `assets/images/万象回廊：元素游戏演示 (2).png`
  - `assets/images/万象回廊：元素游戏演示 (3).png`
  - 一直到 `(12).png`
- 视频：`assets/videos/万象回廊：元素.mp4`

### VR 心理疗愈

- 卡片封面：`assets/images/Vr心理疗愈封面.png`
- 详情演示图：
  - `assets/images/Vr心理疗愈封面.png`
  - `assets/images/Vr心理疗愈封面 (2).png`
- 视频：`assets/videos/vr心理疗愈.mp4`

### 预制力逃

- 卡片封面：`assets/images/预制力逃封面.png`
- 详情演示图：
  - `assets/images/预制力逃封面.png`
  - `assets/images/预制力逃封面.jpg`
- 视频：`assets/videos/预智力逃.mp4`

### 物理幻境之旅

- 当前视频：`assets/videos/物理幻境之旅.mp4`
- 当前封面和详情图暂时仍使用原有远程图

### 废弃工厂的正义突袭

- 当前视频：`assets/videos/废弃工厂的正义突袭.mp4`
- 当前封面和详情图暂时仍使用原有远程图

## 3. 以后怎么继续加图和视频

你后面只要继续把素材丢进这两个目录，再改 `script.js` 里的对应项目字段就行：

```js
image: "./assets/images/你的封面.png",
gallery: [
  "./assets/images/演示图1.png",
  "./assets/images/演示图2.png"
],
video: "https://cdn.your-domain.com/portfolio/demo.mp4",
videoFallback: "./assets/videos/演示视频.mp4",
```

说明：

- `video` 用来放正式部署后的公网 CDN 地址
- `videoFallback` 用来保留你本地预览时的视频
- 页面会优先使用 `video`，没有填时才会用 `videoFallback`

现在详情页里的演示图已经支持：

- 自动缓慢循环左移
- 鼠标悬停暂停
- 鼠标按住拖动

首页作品卡片轨道也同样支持拖动。

## 4. 推到 GitHub

如果只是普通静态文件更新，命令就是：

```powershell
git add .
git commit -m "Update portfolio media"
git push
```

## 5. 部署到 Vercel

如果这个仓库已经接到 Vercel 了，那么：

- 你每次 `git push`
- Vercel 就会自动重新部署

部署完成后，你会得到一个公网地址，例如：

```text
https://personal-portfolio.vercel.app/
```

这个地址：

- 手机微信可以打开
- 电脑浏览器可以打开
- 面试官扫码也能直接访问

## 6. 怎么生成二维码

拿到 Vercel 的公网地址之后，在项目根目录运行：

```powershell
.\make-public-qr.ps1 -Url "https://personal-portfolio.vercel.app/"
```

会生成两个文件：

- `public-qr.png`：二维码图片
- `public-qr.html`：二维码预览页

你可以把 `public-qr.png`：

- 放进简历
- 放进 PDF 作品集
- 发给面试官

## 7. 你现在最需要注意的一件事

你放进去的视频体积很大，当前大概是：

- `vr心理疗愈.mp4`：约 110MB
- `万象回廊：元素.mp4`：约 216MB
- `预智力逃.mp4`：约 210MB
- `物理幻境之旅.mp4`：约 445MB
- `废弃工厂的正义突袭.mp4`：约 453MB

这会带来两个现实问题：

1. GitHub 普通推送对单文件通常有 100MB 限制
2. 即便部署成功，网页加载也会很慢

更稳的做法是：

- 先把视频压缩到 20MB - 80MB 左右
- 或者把视频放到外部存储/CDN，再在页面里使用外链

如果你要走 CDN，我更推荐这类思路：

1. 上传视频到对象存储或 CDN
2. 拿到公开地址，比如 `https://cdn.xxx.com/portfolio/vr-room.mp4`
3. 填进 `script.js` 的 `video` 字段
4. 保留 `videoFallback` 只给本地调试用

如果你愿意，我下一步可以直接继续帮你做两件事：

1. 帮你把这几个大视频改成更适合上线的接入方案
2. 顺手再把物理幻境之旅和废弃工厂这两个项目补本地封面位
