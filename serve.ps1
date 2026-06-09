param(
  [int]$Port = 8080
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Get-LanIp {
  $ip = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object {
      $_.IPAddress -notlike "127.*" -and
      $_.IPAddress -notlike "169.254.*" -and
      $_.PrefixOrigin -ne "WellKnown"
    } |
    Sort-Object InterfaceMetric |
    Select-Object -First 1 -ExpandProperty IPAddress

  if (-not $ip) {
    $ip = "127.0.0.1"
  }

  return $ip
}

$LanIp = Get-LanIp
$Url = "http://${LanIp}:${Port}/"
$QrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=$([uri]::EscapeDataString($Url))"
$QrHtml = @"
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>扫码打开作品集</title>
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
      <h1>扫码打开作品集</h1>
      <img src="$QrUrl" alt="作品集访问二维码" />
      <p>这个二维码只用于本地预览。远程面试请使用 Vercel 公网地址生成二维码。</p>
      <p><a href="$Url">$Url</a></p>
    </main>
  </body>
</html>
"@

Set-Content -Path (Join-Path $Root "qr.html") -Value $QrHtml -Encoding UTF8

Write-Host ""
Write-Host "Portfolio URL: $Url"
Write-Host "QR Page:        $Urlqr.html"
Write-Host ""
Write-Host "Press Ctrl+C to stop the server."
Write-Host ""

Set-Location $Root
python -m http.server $Port --bind 0.0.0.0
