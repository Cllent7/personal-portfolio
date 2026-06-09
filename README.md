# Personal Portfolio

这是一个个人作品集静态网站，推荐通过 Vercel 从 GitHub 仓库部署。

## 推荐发布方式：Vercel

1. 在 GitHub 准备一个仓库，例如 `personal-portfolio`。
2. 把本目录中的全部文件提交并推送到仓库根目录。
3. 打开 Vercel，点击 `Add New` -> `Project`。
4. 选择 GitHub 仓库 `personal-portfolio`。
5. Framework Preset 选择 `Other`，Build Command 和 Output Directory 都留空。
6. 点击 `Deploy`。
7. 发布成功后，Vercel 会给出公网地址，通常类似：

```text
https://personal-portfolio.vercel.app/
```

## 生成公网二维码

发布成功后，在 PowerShell 里运行：

```powershell
.\make-public-qr.ps1 -Url "https://personal-portfolio.vercel.app/"
```

脚本会生成：

- `public-qr.html`：可打开预览的二维码页
- `public-qr.png`：可放进简历、PDF、聊天窗口或作品集说明里的二维码图片

## 本地预览

本地预览只用于自己检查页面，不适合远程面试：

```powershell
.\serve.ps1
```

更详细的 Vercel 发布步骤见 `DEPLOY_VERCEL.md`。
