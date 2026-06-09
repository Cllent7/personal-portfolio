# 媒体替换与部署说明

## 1. 素材目录

当前项目使用这两个目录：

```text
assets/images/
assets/videos/
```

- `assets/images/`：项目封面和演示截图，随 Git 提交到 GitHub。
- `assets/videos/`：本地预览视频，**不会提交到 GitHub**（已在 `.gitignore` 中排除）。

## 2. 视频策略

GitHub Pages 不适合托管大 mp4 文件（单文件限制 100MB，加载缓慢）。本项目采用双地址策略：

| 字段 | 用途 | 示例 |
|------|------|------|
| `video` | 线上公网视频地址（OSS / CDN / R2） | `https://xxx.oss-cn-beijing.aliyuncs.com/Video/demo.mp4` |
| `videoFallback` | 本地预览地址（不提交到 Git） | `./assets/videos/demo.mp4` |

页面优先使用 `video`；如果 `video` 为空或加载失败，会尝试 `videoFallback`。

在 `script.js` 中配置：

```js
{
  id: "element-knight",
  title: "万象回廊：元素",
  image: "./assets/images/optimized/element-knight-cover-latest.webp",
  gallery: [
    "./assets/images/optimized/element-knight-gallery-01.webp",
    "./assets/images/optimized/element-knight-gallery-02.webp"
  ],
  video: "https://cllent-personal-portfolic.oss-cn-beijing.aliyuncs.com/Video/element-knight.mp4",
  videoFallback: "./assets/videos/element-knight.mp4",
}
```

## 3. 当前媒体映射

### 万象回廊：元素

- 封面：`assets/images/optimized/element-knight-cover-latest.webp`
- 演示图：`assets/images/optimized/element-knight-gallery-*.webp`（12 张）
- 线上视频：阿里云 OSS 外链
- 本地预览视频：`assets/videos/element-knight.mp4`（不提交）

### VR 心理疗愈

- 封面：`assets/images/optimized/vr-room-cover.webp`
- 演示图：`assets/images/optimized/vr-room-gallery-*.webp`（13 张）
- 线上视频：阿里云 OSS 外链
- 本地预览视频：`assets/videos/vr-room.mp4`（不提交）

### 物理幻境之旅

- 封面：`assets/images/optimized/physics-illusion-cover-latest.webp`
- 演示图：`assets/images/optimized/physics-illusion-gallery-*.webp`（3 张）
- 线上视频：阿里云 OSS 外链
- 本地预览视频：`assets/videos/physics-illusion.mp4`（不提交）

### 预制力逃

- 封面：`assets/images/optimized/wisdom-strength-cover.webp`
- 演示图：`assets/images/optimized/wisdom-strength-gallery-*.webp`（9 张）
- 线上视频：阿里云 OSS 外链
- 本地预览视频：`assets/videos/wisdom-strength.mp4`（不提交）

### 废弃工厂的正义突袭

- 封面：`assets/images/optimized/justice-raid-cover-latest.webp`
- 演示图：`assets/images/optimized/justice-raid-gallery-*.webp`（14 张）
- 线上视频：阿里云 OSS 外链
- 本地预览视频：`assets/videos/justice-raid.mp4`（不提交）

## 4. 以后怎么继续加图和视频

图片直接放进 `assets/images/`，视频放进 `assets/videos/`（仅本地预览），然后修改 `script.js` 中对应项目的字段：

```js
image: "./assets/images/你的封面.webp",
gallery: [
  "./assets/images/演示图1.webp",
  "./assets/images/演示图2.webp"
],
video: "https://你的CDN地址/demo.mp4",
videoFallback: "./assets/videos/演示视频.mp4",
```

说明：

- `video` 放正式部署后的公网 CDN/OSS 地址
- `videoFallback` 保留本地预览时的视频路径
- `assets/videos/` 中的文件不会被提交到 GitHub

## 5. 推到 GitHub 并发布

修改完成后：

```bash
git add .
git commit -m "Update portfolio media"
git push
```

GitHub Pages 会在推送后自动重新发布，无需额外操作。

## 6. 视频容错

如果线上视频加载失败（如 OSS 链接失效、网络问题），页面会自动显示友好提示：

- 提示文字："视频暂时无法加载，可以尝试刷新页面或打开项目仓库查看演示说明。"
- 如果配置了外链，会显示"打开视频外链"按钮，在新标签页打开原始视频地址。

## 7. 注意事项

- 本地预览视频体积很大，不要尝试 `git add assets/videos/`——`.gitignore` 已自动排除。
- 如需更换视频外链地址，只改 `script.js` 中的 `video` 字段即可。
- 图片可以正常提交到 GitHub，建议使用 webp 格式控制体积。
