// controllers/sightPresentController.js
const api = require('../utils/api');

exports.getSightsByZone = async (req, res) => {
  try {
    const keyword = req.query.keyword || '';
    const { data } = await api.getSightsByZone(keyword);   // ← 共用 util

    res.render('sightPresent', { sights: data });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send({ status: 'error', message: 'Internal server error' });
  }
};
