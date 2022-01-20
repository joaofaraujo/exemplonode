const https = require('https');
var config = require('./config');

exports.handler = async (event) => {
    
    config.configLog();
    
    await console.log("meu log");
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
