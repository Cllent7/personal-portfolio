# 媒体替换说明

## 推荐目录

把你的作品集图片和视频放到这些目录：

```text
assets/images/
assets/videos/
```

例如：

```text
assets/images/element-knight-cover.jpg
assets/images/element-knight-01.jpg
assets/videos/element-knight-demo.mp4
```

## 在代码里配置

打开 `script.js`，找到对应项目，例如：

```js
{
  id: "element-knight",
  title: "万象回廊：元素",
  image: "",
  gallery: [],
}
```

把它改成：

```js
image: "./assets/images/element-knight-cover.jpg",
gallery: [
  "./assets/images/element-knight-01.jpg",
  "./assets/images/element-knight-02.jpg",
  "./assets/images/element-knight-03.jpg"
],
video: "./assets/videos/element-knight-demo.mp4",
```

如果你还没有视频，可以先不填 `video`，页面会继续显示视频坑位。

## 推荐规格

- 封面图：`1600 x 1000` 或接近 16:10。
- 展示图：横图优先，宽度建议 1200px 以上。
- 视频：建议 `.mp4`，H.264 编码，大小尽量控制在 30-80MB 内。
- 文件名：建议英文小写，用 `-` 分隔，例如 `vr-room-demo.mp4`。

## 部署到 GitHub + Vercel

1. 把图片和视频放进 `assets/` 目录。
2. 修改 `script.js` 里的路径。
3. 本地预览确认效果：

```powershell
python -m http.server 8094 --bind 127.0.0.1
```

4. 提交并推送：

```powershell
git add .
git commit -m "Add portfolio media"
git push
```

5. Vercel 会自动重新部署。
