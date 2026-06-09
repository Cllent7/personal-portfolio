# Vercel 发布步骤

这个作品集是纯静态网站，可以直接通过 Vercel 从 GitHub 仓库部署。GitHub 只负责存代码，Vercel 负责生成公网 HTTPS 访问地址。

## 成本

- Vercel Hobby：个人项目免费起步。
- GitHub 仓库：可以作为代码来源。
- 自定义域名：可选，不买也能用 `vercel.app` 地址。
- 云服务器：当前阶段不需要。

## 推荐仓库名

建议使用英文仓库名：

```text
personal-portfolio
```

这个名字比 `-` 清楚很多，也适合后续展示完整个人作品集。

## 最简单发布流程

1. 把当前目录提交并推送到 GitHub 仓库，例如 `Cllent7/personal-portfolio`。
2. 打开 Vercel。
3. 点击 `Add New` -> `Project`。
4. 选择你的 GitHub 仓库 `personal-portfolio`。
5. Framework Preset 选择 `Other`，或者保持 Vercel 自动识别。
6. Build Command 留空。
7. Output Directory 留空。
8. 点击 `Deploy`。

发布成功后，Vercel 会给你一个 HTTPS 地址，通常类似：

```text
https://personal-portfolio.vercel.app/
```

这个地址是公网地址，远程面试官可以直接打开，也可以扫码打开。

## 生成给面试官扫的二维码

发布成功后，在本目录运行：

```powershell
.\make-public-qr.ps1 -Url "https://personal-portfolio.vercel.app/"
```

生成的 `public-qr.png` 就是公网二维码。

## 后续更新

以后你修改作品集内容后，只需要：

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

Vercel 会自动重新部署。
