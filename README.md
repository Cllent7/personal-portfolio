# Personal Portfolio

这是一个静态作品集网站，适合直接部署到 Vercel，通过公开链接和二维码给面试官访问。

## 当前视频接入方式

现在页面里的视频逻辑是：

- `video`：公网 CDN 外链，部署后优先使用
- `videoFallback`：本地预览用的备用地址

也就是说，你后面只需要把 `script.js` 里每个项目的 `video` 改成真实的 `https://...` 地址即可。

例如：

```js
video: "https://cdn.your-domain.com/portfolio/element-knight.mp4",
videoFallback: "./assets/videos/万象回廊：元素.mp4",
```

## 当前已接入的媒体

- `万象回廊：元素`
  - 封面：`assets/images/万象回廊：元素封面.png`
  - 演示图：`assets/images/万象回廊：元素游戏演示*.png`
  - 视频：`assets/videos/万象回廊：元素.mp4`
- `VR 心理疗愈`
  - 封面：`assets/images/Vr心理疗愈封面*.png`
  - 视频：`assets/videos/vr心理疗愈.mp4`
- `预制力逃`
  - 封面：`assets/images/预制力逃封面.png`
  - 视频：`assets/videos/预智力逃.mp4`
- `物理幻境之旅`
  - 视频：`assets/videos/物理幻境之旅.mp4`
- `废弃工厂的正义突袭`
  - 视频：`assets/videos/废弃工厂的正义突袭.mp4`

## 本地预览

```powershell
.\serve.ps1
```

或：

```powershell
python -m http.server 8094 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:8094/
```

## 部署到 Vercel

1. 把当前目录推到你的 GitHub 仓库。
2. 打开 [Vercel](https://vercel.com/)。
3. `Add New` -> `Project`。
4. 选择这个 GitHub 仓库。
5. Framework Preset 选 `Other`。
6. Build Command 和 Output Directory 保持空白。
7. 点击 `Deploy`。

部署成功后你会拿到一个公网地址，例如：

```text
https://personal-portfolio.vercel.app/
```

## 生成二维码

拿到公网地址后，在当前目录运行：

```powershell
.\make-public-qr.ps1 -Url "https://personal-portfolio.vercel.app/"
```

会生成：

- `public-qr.png`
- `public-qr.html`

你可以把 `public-qr.png` 放进简历、PDF 或发给面试官。

## 重要提醒

你当前放进去的几个 mp4 体积都很大，其中有多个已经超过 GitHub 普通推送的 100MB 限制。  
如果直接 `git push` 失败，优先考虑这两种方案：

1. 先压缩视频，再重新替换到 `assets/videos/`
2. 视频放到外部平台或对象存储，页面里改成外链

更详细的媒体替换和上线说明见 [MEDIA_GUIDE.md](/F:/文档/个人作品集/MEDIA_GUIDE.md)。
