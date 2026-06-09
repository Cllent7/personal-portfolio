# GitHub Pages 发布步骤

这个作品集是纯静态网站，所以不需要买服务器，不需要后端，也不需要数据库。GitHub Pages 足够用于远程面试官访问。

## 成本

- GitHub Pages：免费起步。
- GitHub 公开仓库：免费。
- 自定义域名：可选，不买也能用 `github.io` 地址。
- 云服务器：当前阶段不需要。

## 最简单发布流程

1. 登录 GitHub。
2. 新建仓库，建议命名为 `unity-portfolio`。
3. 把当前文件夹里的文件全部上传到仓库根目录：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `README.md`
   - `make-public-qr.ps1`
4. 进入仓库 `Settings` -> `Pages`。
5. Source 选择 `Deploy from a branch`。
6. Branch 选择 `main`，目录选择 `/ (root)`。
7. 保存后等待 GitHub 构建完成。

发布成功后，GitHub 会给你一个 HTTPS 地址：

```text
https://你的GitHub用户名.github.io/unity-portfolio/
```

这个地址是公网地址，远程面试官可以直接打开，也可以扫码打开。

## 生成给面试官扫的二维码

发布成功后，在本目录运行：

```powershell
.\make-public-qr.ps1 -Url "https://你的GitHub用户名.github.io/unity-portfolio/"
```

生成的 `public-qr.png` 就是公网二维码。

## 更好的长期方案

如果你之后想更像正式个人网站，可以买一个域名，例如：

```text
yourname.dev
yourname.com
yourname.cn
```

然后把域名绑定到 GitHub Pages。这样面试官看到的是你的个人域名，但第一阶段没必要先花这个钱。
