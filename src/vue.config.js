module.exports = {
    devServer: {
        "/v1/bpi/currentprice.json": {
            target: "https://api.coindesk.com"
        }
    }
};
