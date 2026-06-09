param(
  [Parameter(Mandatory = $true)]
  [string]$Url
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$CleanUrl = $Url.Trim()

if ($CleanUrl -notmatch '^https?://') {
  throw "Url must start with http:// or https://"
}

$QrApi = "https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=$([uri]::EscapeDataString($CleanUrl))"
$PngPath = Join-Path $Root "public-qr.png"
$HtmlPath = Join-Path $Root "public-qr.html"

Invoke-WebRequest -Uri $QrApi -OutFile $PngPath

$Html = @"
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>浣滃搧闆嗗叕缃戜簩缁寸爜</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
        background: #f7fafb;
        color: #17212b;
      }
      main {
        width: min(92vw, 520px);
        padding: 34px;
        border: 1px solid #d8e1e8;
        border-radius: 8px;
        background: white;
        text-align: center;
        box-shadow: 0 18px 48px rgba(23, 33, 43, 0.12);
      }
      img {
        width: 280px;
        max-width: 100%;
        height: auto;
      }
      a {
        color: #0e7c86;
        font-weight: 800;
        word-break: break-all;
      }
      p {
        color: #596673;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>浣滃搧闆嗗叕缃戜簩缁寸爜</h1>
      <img src="./public-qr.png" alt="浣滃搧闆嗗叕缃戣闂簩缁寸爜" />
      <p>这个二维码指向公开网址，远程面试官可以直接扫码打开。</p>
      <p><a href="$CleanUrl">$CleanUrl</a></p>
    </main>
  </body>
</html>
"@

Set-Content -Path $HtmlPath -Value $Html -Encoding UTF8

Write-Host "Created: $PngPath"
Write-Host "Created: $HtmlPath"
Write-Host "Target:  $CleanUrl"

