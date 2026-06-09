# Unity Developer Portfolio

这是一个静态作品集网站，可以直接发布到 GitHub Pages、Cloudflare Pages、Vercel 或 Netlify。

## 推荐发布方式：GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `unity-portfolio`。
2. 上传本目录中的全部文件到仓库根目录。
3. 打开仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. 保存后等待 1-3 分钟。
6. 访问 GitHub 显示的 Pages 地址，通常是：

```text
https://你的GitHub用户名.github.io/unity-portfolio/
```

如果仓库名是 `你的GitHub用户名.github.io`，地址通常是：

```text
https://你的GitHub用户名.github.io/
```

## 生成公网二维码

发布成功后，在 PowerShell 里运行：

```powershell
.\make-public-qr.ps1 -Url "https://你的GitHub用户名.github.io/unity-portfolio/"
```

脚本会生成：

- `public-qr.html`：可打开预览的二维码页
- `public-qr.png`：可放进简历、PDF、聊天窗口或作品集说明里的二维码图片

## 本地预览

本地预览只用于自己检查页面，不适合远程面试：

```powershell
.\serve.ps1
```
