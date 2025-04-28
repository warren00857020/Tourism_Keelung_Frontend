# 使用官方 Node.js 基礎映像
FROM node:18

# 建立應用目錄
WORKDIR /app

# 複製 package.json 和 lock 檔
COPY package*.json ./

# 安裝相依
RUN npm install

# 複製其他檔案
COPY . .

# 開放你前端的 port（預設應該是 3000）
EXPOSE 3000

# 啟動應用（你用的是 app.js）
CMD ["node", "app.js"]
