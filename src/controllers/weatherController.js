let axios = require("axios")

let getCurrentWeather = async function(req, res) {
    try {
        let place = req.query.place
        let appId = req.query.appid
        console.log(`query params are: ${place} ${appId}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appId}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ status: true, msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getTempIncreased = async(req, res) => {
    try {
        let placeId = req.query.id;
        let appId = req.query.appid;

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/group?id=${placeId}&appid=${appId}`
        }

        let response = await axios(options);
        let array = response.data.list.length
        let result = [];

        for (let i = 0; i < array; i++) {
            let resData = {
                city: response.data.list[i].name,
                temp: response.data.list[i].main.temp
            };

            result.push(resData);
        }

        res.status(200).send({ status: true, data: result });
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getCurrentWeather = getCurrentWeather
module.exports.getTempIncreased = getTempIncreased