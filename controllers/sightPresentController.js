const axios = require('axios');

// exports.createSight = async (newSight) => {
//     try {
//         const response = await axios.post('http://localhost:8080/sights', newSight);
//         console.log('Created sight:', response.data);
//     } catch (error) {
//         console.error('Error creating sight:', error.message);
//     }
// };

exports.getSightsByZone = async (req, res) => {
    try {
        const keyword = req.query.keyword;

        const response = await axios.get('http://spring:8080/sights?keyword='+keyword);
        
        const sightsData = response.data;

        // console.log('Sights Data:', sightsData);

        // 返回结果
        res.render(
            'sightPresent',
            {sights:sightsData}
        );
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({
            status: 'error',
            message: 'Internal server error'
        });
    }
};


