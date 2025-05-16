FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 8080
CMD ["node", "bin/www"]   # 你的啟動檔
