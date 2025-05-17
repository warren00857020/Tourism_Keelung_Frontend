# ---------- build & runtime in the same image ----------
FROM node:20-alpine

WORKDIR /app

# 1. 先複製 package 檔並安裝依賴（利於快取）
COPY package*.json ./
RUN npm ci --production        # 前端靜態檔不需要 devDependencies

# 2. 再複製其餘原始碼
COPY . .

# 3. Cloud Run 會注入 $PORT；Express 必須 listen 該值
ENV PORT 8080
EXPOSE 8080

# 4. JSON-array 形式的 CMD，**不要有空格或奇怪的引號**
CMD ["node","bin/www"]
