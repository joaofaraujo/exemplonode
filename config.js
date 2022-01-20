const https = require('https');

function getRequest(mensagem) {
  const url = 'sua URL';
  
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let rawData = '';

      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on('error', err => {
      reject(new Error(err));
    });
  });
}

module.exports = {
  configLog: function () {
    console.log = async function(mensagem) {
      await getRequest(mensagem);
    };
  }
};
