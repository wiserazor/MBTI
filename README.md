# 向内看｜16 型人格倾向测试

一个零依赖的中文静态测试网站。包含 40 道题、答题进度保存、四维倾向计算、16 种结果说明和移动端适配。

> 本项目不是 MBTI® 官方测评，仅供娱乐与自我探索。MBTI 是 The Myers-Briggs Company 的注册商标。

## 本地预览

直接双击 `index.html` 即可。为了完整模拟线上环境，也可以在该目录运行任意静态文件服务器。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个公开仓库。
2. 将本目录内的 `index.html`、`styles.css` 和 `app.js` 上传到仓库根目录。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 分支选择 `main`，目录选择 `/ (root)`，保存。
6. 等待约 1–3 分钟，GitHub 会显示网站地址。

## 部署到阿里云轻量应用服务器

### 已安装宝塔面板

1. 在宝塔中创建一个“纯静态”站点。
2. 将本目录内的三个文件上传到站点根目录。
3. 绑定域名，并在面板中申请免费的 Let's Encrypt HTTPS 证书。

### 使用 Nginx

将三个文件上传到 `/var/www/personality-quiz/`，并添加站点配置：

```nginx
server {
    listen 80;
    server_name 你的域名;
    root /var/www/personality-quiz;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

检查配置后重新加载 Nginx，再用 Certbot 或阿里云控制台配置 HTTPS。

## 自定义

- 网站名称和说明：修改 `index.html`
- 颜色与版式：修改 `styles.css` 开头的颜色变量
- 题目、结果文案与计分：修改 `app.js`

当前计分方式：每个维度 10 题，七级量表为 `+3` 到 `-3`；反向题会反向计分，最后按四个维度的正负确定类型倾向。
