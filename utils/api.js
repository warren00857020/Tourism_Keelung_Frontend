// utils/api.js
require('dotenv').config();               // 讀 .env 檔

const axios = require('axios');

// 讀環境變數，dev = http://localhost:8080，prod = https://myapp-…run.app
const BASE = process.env.API_BASE_URL || 'http://localhost:8080';

const client = axios.create({
  baseURL: BASE,
  timeout: 15_000,                        // 15 秒逾時
});

// 封裝呼叫
exports.getSightsByZone = (zone) =>
  client.get('/sights', { params: { keyword: zone } });   // → /sights?keyword=...

exports.createSight = (sightReq) =>
  client.post('/sights', sightReq);
