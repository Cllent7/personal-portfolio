# Personal Portfolio

Unity 开发作品集静态网站，部署于 GitHub Pages，展示游戏、VR、AI 交互、教育仿真与性能优化项目。

## 在线访问

```text
https://Cllent7.github.io/personal-portfolio/
```

手机、电脑浏览器均可打开，面试官可以直接扫码访问。

## 本地预览

```bash
python -m http.server 8094 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:8094/
```

或使用 PowerShell：

```powershell
.\serve.ps1
```

## 部署到 GitHub Pages

本项目为纯静态网站，无需构建步骤，直接从 main 分支根目录部署。

1. 将仓库推送到 GitHub：`Cllent7/personal-portfolio`
2. 打开仓库 **Settings → Pages**
3. **Build and deployment** 下：
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. 点击 **Save**

GitHub 会自动构建并发布，几分钟后即可通过上面的地址访问。

## 更新网站

修改内容后：

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages 会在推送后自动重新发布。

## 视频接入方式

页面里的视频逻辑：

- `video`：公网 CDN/OSS 外链，部署后优先使用。当前已接入阿里云 OSS。
- `videoFallback`：本地预览用的备用地址，指向 `assets/videos/`。

例如 `script.js` 中的配置：

```js
video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/element-knight.mp4",
videoFallback: "./assets/videos/element-knight.mp4",
```

线上访问时使用 `video` 外链；本地预览时如果 `video` 不可用，会尝试 `videoFallback`。

## 视频容错

如果视频外链加载失败，页面会显示友好提示，并提供"打开视频外链"按钮，方便直接在新标签页查看演示视频。

## 重要提醒

- 不建议将大 mp4 提交到 GitHub（单文件限制 100MB，且加载缓慢）。`assets/videos/` 已在 `.gitignore` 中排除。
- 正式线上视频建议使用 OSS、R2、CDN 或其他公网地址。

更详细的媒体说明见 [MEDIA_GUIDE.md](./MEDIA_GUIDE.md)。
