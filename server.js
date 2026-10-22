const express = require('express');
const app = express();

// 根路由 - 显示 Hello World 页面
app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - 李少鹏</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Microsoft YaHei', 'PingFang SC', Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .container {
      text-align: center;
      padding: 60px 40px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      max-width: 600px;
      width: 90%;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    .message {
      font-size: 1.5rem;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    .time-box {
      background: rgba(0, 0, 0, 0.2);
      padding: 20px 30px;
      border-radius: 10px;
      font-size: 1.2rem;
      display: inline-block;
    }
    .label {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 8px;
      display: block;
    }
    .time-value {
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .footer {
      margin-top: 30px;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👋 Hello World！</h1>
    <p class="message">我是 <strong>李少鹏</strong>，<br>我的第一个 AI 开发的网站</p>
    <div class="time-box">
      <span class="label">🕐 当前服务器时间</span>
      <span class="time-value">${currentTime}</span>
    </div>
    <p class="footer">由 Node.js + Express 构建 · 低代码实践练习一</p>
  </div>
</body>
</html>
  `;
  res.send(html);
});

// 监听端口（Vercel 兼容）
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});

module.exports = app;
